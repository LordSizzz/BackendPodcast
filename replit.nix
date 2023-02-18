{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.sqlite
        pkgs.nodePackages.typescript-language-server
		    pkgs.nodePackages.node-pre-gyp
		    pkgs.libpng
		    pkgs.libjpeg
		    pkgs.libuuid
        pkgs.openssl
    ];
}