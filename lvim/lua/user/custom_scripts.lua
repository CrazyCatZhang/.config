local M = {}

M.config = function()
  window_sizes = window_sizes or {}

  function toggle_maximize_split()
    local cur_win = vim.api.nvim_get_current_win()

    if window_sizes[cur_win] then
      for win, size in pairs(window_sizes) do
        vim.api.nvim_win_set_width(win, size.width)
        vim.api.nvim_win_set_height(win, size.height)
      end
      window_sizes = {}
    else
      local wins = vim.api.nvim_list_wins()
      for _, win in ipairs(wins) do
        local width = vim.api.nvim_win_get_width(win)
        local height = vim.api.nvim_win_get_height(win)
        window_sizes[win] = { width = width, height = height }
      end
      vim.api.nvim_win_set_width(cur_win, vim.api.nvim_get_option "columns")
      vim.api.nvim_win_set_height(cur_win, vim.api.nvim_get_option "lines" - 1) -- 减去1为状态栏预留空间
    end
  end

  vim.api.nvim_set_keymap("n", "<C-f>", ":lua toggle_maximize_split()<CR>", { noremap = true, silent = true })
end

return M
