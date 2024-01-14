local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  -- bootstrap lazy.nvim
  -- stylua: ignore
  vim.fn.system({ "git", "clone", "--filter=blob:none", "https://github.com/folke/lazy.nvim.git", "--branch=stable", lazypath })
end
vim.opt.rtp:prepend(vim.env.LAZY or lazypath)

require("lazy").setup({
  spec = {
    -- add LazyVim and import its plugins
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    -- import any extras modules here
    -- { import = "lazyvim.plugins.extras.lang.typescript" },
    -- { import = "lazyvim.plugins.extras.lang.json" },
    -- { import = "lazyvim.plugins.extras.ui.mini-animate" },
    -- import/override with your plugins
    { import = "plugins" },
  },
  defaults = {
    -- By default, only LazyVim plugins will be lazy-loaded. Your custom plugins will load during startup.
    -- If you know what you're doing, you can set this to `true` to have all your custom plugins lazy-loaded by default.
    lazy = false,
    -- It's recommended to leave version=false for now, since a lot the plugin that support versioning,
    -- have outdated releases, which may break your Neovim install.
    version = false, -- always use the latest git commit
    -- version = "*", -- try installing the latest stable version for plugins that support semver
  },
  install = { colorscheme = { "tokyonight", "habamax" } },
  checker = { enabled = true }, -- automatically check for plugin updates
  performance = {
    rtp = {
      -- disable some rtp plugins
      disabled_plugins = {
        "gzip",
        "dropbar",
        "vim-instant-markdown",
        -- "matchit",
        -- "matchparen",
        -- "netrwPlugin",
        "tarPlugin",
        "tohtml",
        "tutor",
        "zipPlugin",
      },
    },
  },
})

-- Define the theme and set the button to select the theme
Ice = {}

require("config.colorscheme")

if not Ice.colorscheme then
  local colorscheme_cache = vim.fn.stdpath("data") .. "/colorscheme"
  local colorscheme_cache_file = io.open(colorscheme_cache, "r")
  if colorscheme_cache_file ~= nil then
    local colorscheme = colorscheme_cache_file:read("*a")
    colorscheme_cache_file:close()
    Ice.colorscheme = Ice.colorschemes[colorscheme]
  else
    Ice.colorscheme = Ice.colorschemes["tokyonight"]
  end
end

if Ice.colorscheme then
  require("config.utils").colorscheme(Ice.colorscheme)
end

vim.api.nvim_set_keymap(
  "n",
  "ee",
  ':lua require("config.utils").select_colorscheme()<CR>',
  { noremap = true, silent = true }
)
