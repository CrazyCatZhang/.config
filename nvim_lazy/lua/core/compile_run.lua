local split = function()
  vim.cmd("set splitbelow")
  vim.cmd("sp")
  vim.cmd("res -5")
end
local compileRun = function()
  vim.cmd("w")
  -- check file type
  local ft = vim.bo.filetype
  if ft == "dart" then
    vim.cmd(":FlutterRun -d " .. vim.g.flutter_default_device .. " " .. vim.g.flutter_run_args)
  elseif ft == "markdown" then
    vim.cmd(":InstantMarkdownPreview")
  elseif ft == "c" then
    split()
    vim.cmd("term gcc % -o %< && ./%< && rm %<")
  elseif ft == "javascript" then
    split()
    vim.cmd("term node %")
  elseif ft == "typescript" then
    split()
    local ts_filename = vim.fn.expand("%:p")
    local js_filename = ts_filename:gsub("%.ts$", ".js")
    vim.cmd("term tsc " .. ts_filename .. " && node " .. js_filename)
  elseif ft == "java" then
    split()
    local java_filename = vim.fn.expand("%:p")
    local class_filename = java_filename:gsub("%.java$", ".class")
    vim.cmd("term javac " .. java_filename .. " && java " .. class_filename:gsub("%.class$", ""))
  elseif ft == "lua" then
    split()
    vim.cmd("term luajit %")
  elseif ft == "tex" then
    vim.cmd(":VimtexCompile")
  end
end

vim.keymap.set("n", "r", compileRun, { silent = true })
