local priority = {
  LOW = 100,
  MEDIUM = 200,
  HIGH = 615,
}

return {
  -- add gruvbox
  { "ellisonleao/gruvbox.nvim" },

  {
    "Luxed/ayu-vim",
    priority = priority.HIGH,
  },
  {
    "projekt0n/github-nvim-theme",
    priority = priority.HIGH,
  },
  {
    "EdenEast/nightfox.nvim",
    priority = priority.HIGH,
  },
  {
    "folke/tokyonight.nvim",
    priority = priority.HIGH,
  },
  {
    "catppuccin/nvim",
    lazy = true,
    name = "catppuccin",
    opts = {
      integrations = {
        aerial = true,
        alpha = true,
        cmp = true,
        dashboard = true,
        flash = true,
        gitsigns = true,
        headlines = true,
        illuminate = true,
        indent_blankline = { enabled = true },
        leap = true,
        lsp_trouble = true,
        mason = true,
        markdown = true,
        mini = true,
        native_lsp = {
          enabled = true,
          underlines = {
            errors = { "undercurl" },
            hints = { "undercurl" },
            warnings = { "undercurl" },
            information = { "undercurl" },
          },
        },
        navic = { enabled = true, custom_bg = "lualine" },
        neotest = true,
        neotree = true,
        noice = true,
        notify = true,
        semantic_tokens = true,
        telescope = true,
        treesitter = true,
        treesitter_context = true,
        which_key = true,
      },
    },
  },
}
