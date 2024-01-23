---@diagnostic disable: need-check-nil
local utils = {}

-- Allow ordered iteration through a table
---@param t table
---@return function
utils.ordered_pair = function(t)
  local a = {}

  for n in pairs(t) do
    a[#a + 1] = n
  end

  table.sort(a)

  local i = 0

  return function()
    i = i + 1
    return a[i], t[a[i]]
  end
end

-- Set up colorscheme and Ice.colorscheme, but does not take care of lualine
-- The colorscheme is a table with:
--   - name: to be called with the `colorscheme` command
--   - setup: optional; can either be:
--     - a function called alongside `colorscheme`
--     - a table for plugin setup
--   - background: "light" / "dark"
--   - lualine_theme: optional
---@param colorscheme table
utils.colorscheme = function(colorscheme)
  Ice.colorscheme = colorscheme
  if type(colorscheme.setup) == "table" then
    require(colorscheme.name).setup(colorscheme.setup)
  elseif type(colorscheme.setup) == "function" then
    colorscheme.setup()
  end
  vim.cmd("colorscheme " .. colorscheme.name)
  vim.o.background = colorscheme.background

  vim.api.nvim_set_hl(0, "Visual", { reverse = true })
end

-- Switch colorscheme
utils.select_colorscheme = function()
  local status, _ = pcall(require, "telescope")
  if not status then
    return
  end

  local pickers = require("telescope.pickers")
  local finders = require("telescope.finders")
  local conf = require("telescope.config").values
  local actions = require("telescope.actions")
  local action_state = require("telescope.actions.state")

  local function picker(opts)
    opts = opts or {}

    local colorschemes = Ice.colorschemes
    local results = {}
    for name, _ in utils.ordered_pair(colorschemes) do
      results[#results + 1] = name
    end

    pickers
      .new(opts, {
        prompt_title = "Colorschemes",
        finder = finders.new_table({
          entry_maker = function(entry)
            return {
              value = entry,
              display = entry,
              ordinal = entry,
            }
          end,
          results = results,
        }),
        sorter = conf.generic_sorter(opts),
        attach_mappings = function(prompt_bufnr, _)
          actions.select_default:replace(function()
            actions.close(prompt_bufnr)

            local selection = action_state.get_selected_entry()
            local config = colorschemes[selection.value]

            if config.background == "light" then
              ---@diagnostic disable-next-line: param-type-mismatch
              pcall(vim.cmd, "TransparentDisable")
            else
              ---@diagnostic disable-next-line: param-type-mismatch
              pcall(vim.cmd, "TransparentEnable")
            end

            utils.colorscheme(config)

            local colorscheme_cache = vim.fn.stdpath("data") .. "/colorscheme"
            local f = io.open(colorscheme_cache, "w")
            f:write(selection.value)
            f:close()
          end)
          return true
        end,
      })
      :find()
  end

  picker()
end

-- Quickly look through configuration files using telescope
utils.view_configuration = function()
  local status, _ = pcall(require, "telescope")
  if not status then
    return
  end

  local pickers = require("telescope.pickers")
  local finders = require("telescope.finders")
  local conf = require("telescope.config").values
  local actions = require("telescope.actions")
  local action_state = require("telescope.actions.state")
  local previewers = require("telescope.previewers.buffer_previewer")
  local from_entry = require("telescope.from_entry")

  local function picker(opts)
    opts = opts or {}

    local config_root = vim.fn.stdpath("config")
    local files = require("plenary.scandir").scan_dir(config_root, { hidden = true })
    local sep = require("plenary.path").path.sep
    local picker_sep = "/" -- sep that is displayed in the picker
    local results = {}

    local make_entry = require("telescope.make_entry").gen_from_file

    for _, item in pairs(files) do
      if config_root == nil then
        return
      end
      item = string.gsub(item, config_root, "")
      item = string.gsub(item, sep, picker_sep)
      item = string.sub(item, 2)
      if not (string.find(item, "bin/") or string.find(item, ".git/") or string.find(item, "screenshots/")) then
        results[#results + 1] = item
      end
    end

    pickers
      .new(opts, {
        prompt_title = "Configuration Files",
        finder = finders.new_table({
          entry_maker = make_entry(opts),
          results = results,
        }),
        previewer = (function(_opts)
          _opts = _opts or {}
          return previewers.new_buffer_previewer({
            title = "Configuration",
            get_buffer_by_name = function(_, entry)
              return from_entry.path(entry, false)
            end,
            define_preview = function(self, entry)
              local p = config_root .. "/" .. entry.filename
              if p == nil or p == "" then
                return
              end
              conf.buffer_previewer_maker(p, self.state.bufnr, {
                bufname = self.state.bufname,
                winid = self.state.winid,
                preview = _opts.preview,
                file_encoding = _opts.file_encoding,
              })
            end,
          })
        end)(opts),
        sorter = conf.generic_sorter(opts),
        attach_mappings = function(prompt_bufnr, _)
          actions.select_default:replace(function()
            actions.close(prompt_bufnr)

            local selection = action_state.get_selected_entry()[1]
            selection = string.gsub(selection, picker_sep, sep)
            local full_path = config_root .. sep .. selection

            vim.cmd("edit " .. full_path)
          end)
          return true
        end,
      })
      :find()
  end

  picker()
end

return utils
