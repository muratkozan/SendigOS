Copyright (C) <2011>  <José Antonio Sánchez Reynaga> v 0.2RC


Quick Usb Formatter

This software it's for format usb sticks,
it's designed for being simple, so if you need
a more specialized format you should use instead
a more advanced tool.

Build steps:

mkdir build && cd build
cmake -DCMAKE_INSTALL_PREFIX=/usr ..
make 
sudo make install

Features:

version 0.1 beta
> Ntfs support
> fat support
> ext4 support

version 0.2 RC :)
> Device Notifier plasmoid integration

version 0.3
> Fox typos, added galician and italian trasnlations, ext3 & ext2 support

version 0.4
> Fix segment fault, add dialog for confirm the format action

version 0.5
> GUI REwork
> Kauth implementation
> Migrated to KApplication

enjoy!!

TODO:
> Dolphin context menu integration


Credits:
-------------------
Main Developer: José Antonio Sánchez Reynaga  <antoniojasr@chakra-project.org>
Internationalization: Manuel Tortosa <manutortosa@chakra-project.org / Adrián Chaves Fernández (Gallaecio) <adriyetichaves@gmail.com>

Translators:
-----------------------------
Catalan: Manuel Tortosa <manutortosa@chakra-project.org
French: Fabien Valthier <hcoohb@gmail.com>
Galician: Adrián Chaves Fernández (Gallaecio) <adriyetichaves@gmail.com>
Italian: Gianluca Boiano <morf3089@gmail.com>
Turkish: Gürkan Gür <seqizz@gmail.com>