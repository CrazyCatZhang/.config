local M = {
  "nvimtools/none-ls.nvim",
}

function M.config()
  local null_ls = require("null-ls")

  local formatting = null_ls.builtins.formatting
  local diagnostics = null_ls.builtins.diagnostics -- to setup linters
  local augroup = vim.api.nvim_create_augroup("LspFormatting", {})

  null_ls.setup({
    debug = true,
    sources = {
      --  to disable file types use
      --  "formatting.prettier.with({disabled_filetypes = {}})" (see null-ls docs)
      formatting.prettier, -- js/ts formatter
      formatting.black, -- python formatter
      formatting.stylua, -- lua formatter
      diagnostics.eslint_d.with({ -- js/ts linter
        -- only enable eslint if root has .eslintrc.js (not in youtube nvim video)
        condition = function(utils)
          return utils.root_has_file(".eslintrc.js") -- change file extension if you use something else
        end,
      }),
    },
    -- configure format on save
    on_attach = function(current_client, bufnr)
      if current_client.supports_method("textDocument/formatting") then
        vim.api.nvim_clear_autocmds({ group = augroup, buffer = bufnr })
        vim.api.nvim_create_autocmd("BufWritePre", {
          group = augroup,
          buffer = bufnr,
          callback = function()
            vim.lsp.buf.format({
              filter = function(client)
                --  only use null-ls for formatting instead of lsp server
                return client.name == "null-ls"
              end,
              bufnr = bufnr,
            })
          end,
        })
      end
    end,
  })
end

return M
