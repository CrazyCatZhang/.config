return {
  {
    "SirVer/ultisnips",
    dependencies = {
      "honza/vim-snippets",
    },
    config = function()
      vim.g.UltiSnipsSnippetDirectories = { "~/.config/nvim/Ultisnips" }
    end,
  },
}
