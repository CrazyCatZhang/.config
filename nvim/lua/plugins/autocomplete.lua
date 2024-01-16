return {
  "hrsh7th/nvim-cmp",
  after = "SirVer/ultisnips",
  dependencies = {
    "hrsh7th/cmp-buffer",
    "hrsh7th/cmp-path",
    "hrsh7th/cmp-nvim-lsp",
    "hrsh7th/cmp-nvim-lua",
    "hrsh7th/cmp-calc",
    -- "andersevenrud/cmp-tmux",
    {
      "onsails/lspkind.nvim",
      lazy = false,
      config = function()
        require("lspkind").init()
      end,
    },
    {
      "quangnguyen30192/cmp-nvim-ultisnips",
      config = function()
        -- optional call to setup (see customization section)
        require("cmp_nvim_ultisnips").setup({})
      end,
    },
    -- "L3MON4D3/LuaSnip",
  },
}
