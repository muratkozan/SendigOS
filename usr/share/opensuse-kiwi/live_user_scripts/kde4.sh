#! /bin/sh

/usr/lib/systemd/scripts/gpuswap.sh start

set -e

desktop="`xdg-user-dir DESKTOP 2>/dev/null`"
if test -z "$desktop"; then
    desktop=$HOME/Desktop
fi

if test -e /usr/share/applications/YaST2/live-installer.desktop ; then
   if [ ! -e "$desktop/live-installer.desktop" -a -e "/usr/share/kde4/config/SuSE/default/live-installer.desktop" ]; then
        mkdir -p "$desktop"
        cp /usr/share/kde4/config/SuSE/default/live-installer.desktop "$desktop/"
        chmod u+x "$desktop/live-installer.desktop"

   fi
   
else
    rm -f "$desktop/live-installer.desktop"
   
fi
