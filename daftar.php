<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Template</title>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/daftar.css">
</head>

<body>
    <div id="root">
        <div class="css-1bz4ouw">
            <div class="tw-min-h-screen tw-bg-white tw-px-6 tw-py-5 css-0 ebd3p831">
                <a href="https://www.prakerja.go.id" class="tw-flex tw-items-center tw-mb-6 sm:tw-mb-12 hover:tw-no-underline tw-text-primary hover:tw-text-primary-lighter tw-text-sm">
                    <img src="assets/images/left-arrow.svg" alt="left-arrow">
                    <span class="tw-block tw-pl-2">Kembali</span>
                </a>
                <a href="https://www.prakerja.go.id" class="tw-block tw-mb-8 sm:tw-mb-12">
                    <img src="assets/images/logo-kartu-prakerja.png" alt="Logo Kartu Prakerja" class="css-avxzix"></a>
                <h3 class="tw-text-primary tw-text-lg tw-font-bold">Yuk, daftar Kartu Prakerja!</h3>
                <p class="tw-text-primary tw-mb-10">Mohon isi data di bawah ini dengan benar</p>
                <form action="#" autocomplete="off" novalidate="">
                    <div class="tw-mb-1 css-o2rotx e48vd4k1">
                        <div class="tw-relative"><input type="email" placeholder="alamat@email.com" name="email" class="css-12rkqhi e48vd4k0" value=""><label class="css-hxauk4 e48vd4k2">Alamat Email</label></div>
                    </div><span class="tw-block tw-text-right tw-text-abu-light tw-text-xs tw-mb-1 css-10zg3ay"></span>
                    <div class="tw-shadow-md tw-mb-4 css-o2rotx e48vd4k1">
                        <div class="tw-relative">
                            <div class="tw-relative"><input name="password" type="password" placeholder="Gunakan 6 karakter atau lebih" class="css-12rkqhi e48vd4k0" value="" aria-autocomplete="list"><label class="css-hxauk4 e48vd4k2">Password</label></div><img src="assets/images/eye.svg" alt="show password" class="css-d21dn8">
                        </div>
                        <div class="tw-relative">
                            <div class="tw-relative"><input name="passwordConfirm" type="password" placeholder="Konfirmasi ulang password" class="css-jonc7y e48vd4k0" value=""><label class="css-by8fd3 e48vd4k2">Konfirmasi Password</label></div><img src="assets/images/eye.svg" alt="show password" class="css-d21dn8">
                        </div>
                    </div>
                    <div class="tw-mb-5 css-53x7el">
                    </div>
                    <div class="tw-text-xs tw-text-abu css-1scdakx"><input type="checkbox" name="agreeTnC"><label>Saya menyetujui <a href="https://www.prakerja.go.id/syarat-ketentuan" target="_blank" rel="noopener noreferrer" class="tw-underline tw-text-primary hover:tw-text-primary-lighter">Syarat dan Ketentuan</a> dan <a href="https://www.prakerja.go.id/kebijakan-privasi" target="_blank" rel="noopener noreferrer" class="tw-underline tw-text-primary hover:tw-text-primary-lighter">Kebijakan Privasi</a> yang berlaku.</label></div><button type="submit" class="tw-my-4 css-1iefhk0">Daftar</button>
                </form>
                <p class="tw-text-xs tw-text-abu">Sudah daftar? <a class="tw-text-primary hover:tw-text-primary-lighter tw-font-bold" href="/masuk">Login</a></p>
            </div>
            <div class="css-0 ebd3p832">
                <div class="css-yatt51 ebd3p830"></div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script type="text/javascript">
        const password = document.getElementById('password');
        const toggle = document.getElementById('toggle');

        function showHide() {
            if (password.type === 'password') {
                password.setAttribute('type', 'text');
                toggle.classList.add('hide')
            } else {
                password.setAttribute('type', 'password');
                toggle.classList.remove('hide')
            }
        }
    </script>
</body>

</html>