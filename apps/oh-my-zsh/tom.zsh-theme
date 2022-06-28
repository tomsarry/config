# Theme based on the robbyrussell default oh-my-zsh theme
# 
# Place in ~/.oh-my-zsh/custom/theme
# Update .zshrc with
#    ZSH_THEME="tom"

PROMPT="%(?:%{$fg_bold[blue]%}❆ :%{$fg_bold[red]%}❆ )"
PROMPT+=' %{$fg[cyan]%}%c%{$reset_color%} $(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[blue]%}git:(%{$fg[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}✗"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"
