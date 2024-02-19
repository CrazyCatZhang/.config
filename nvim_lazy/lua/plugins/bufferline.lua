return {
  "akinsho/bufferline.nvim",
  version = "*",
  enabled = false,
  dependencies = "nvim-tree/nvim-web-devicons",
  config = function()
    require("bufferline").setup({
      options = {
        numbers = "none",
        diagnostics = "nvim_lsp",
        diagnostics_indicator = function(_, _, diagnostics_dict)
          local s = " "
          for e, n in pairs(diagnostics_dict) do
            local sym = e == "error" and " " or (e == "warning" and " " or " ")
            s = s .. n .. sym
          end
          return s
        end,
        show_close_icon = false,
        show_buffer_close_icons = false,
        show_tab_indicators = false,
        max_name_length = 18,
        max_prefix_length = 15,
        tab_size = 18,
        enforce_regular_tabs = false,
        view = "multiwindow",
        separator_style = "thin",
        always_show_bufferline = false,
      },
    })
    vim.keymap.set("n", "tl", "<Cmd>BufferLineCycleNext<CR>", {})
    vim.keymap.set("n", "th", "<Cmd>BufferLineCyclePrev<CR>", {})
  end,
}
