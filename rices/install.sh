sudo pacman -S polybar
sudo pacman -S nitrogen
nitrogen /home/sockterx/.wallpapers/archbtw.png
sudo pacman -S install firefox
sudo pacman -S install nano
sudo pacman -S install git
sudo git clone https://aur.archlinux.org/yay.git
sudo chown -R  cloudcone:users yay
cd yay
makepkg -si
cd ..
sudo pacman -S pcmanfm
sudo pacman -S ranger
sudo pacman -S ttf-font-awesome
