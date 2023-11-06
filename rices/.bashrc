#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

xrandr -s 1920x1080

alias cls='clear'
alias ls='ls --color=auto -al'
alias grep='grep --color=auto'
alias polyconf='sudo nano /etc/polybar/config.ini'
alias i3conf=' nano ~/.config/i3/config'
alias bashrc='nano /home/sockterx/.bashrc'
alias install='sudo pacman -S'
alias remove='sudo pacman -R'
alias logout='sudo pkill -SIGKILL -u sockterx'
PS1='[\u@\h \W]\$ '
