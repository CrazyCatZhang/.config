export ZSH="$HOME/.oh-my-zsh"

export PATH="/usr/local/opt/openjdk/bin:$PATH"

export CPPFLAGS="-I/usr/local/opt/openjdk/include"

export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/ruby@3.1/lib"
export CPPFLAGS="-I/usr/local/opt/ruby@3.1/include"

export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

export PKG_CONFIG_PATH="/usr/local/opt/xcb-util-image/lib/pkgconfig:$PKG_CONFIG_PATH"

export PATH="/usr/local/sbin:$PATH"

export PATH="/Applications/iTerm.app/Contents/Resources:${PATH}"

export TERM=xterm-256color

export EDITOR=lvim

export PATH="/Users/crazycatzhang/.local/bin:$PATH"

export PATH="$PATH:/Users/crazycatzhang/.cargo/bin"

export PATH=~/.console-ninja/.bin:$PATH
