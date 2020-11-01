<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Template</title>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/login.css">
    <link rel="stylesheet" href="assets/css/chunks.css">
</head>

<body>
    <main>
        <div class="container-fluid">
            <div class="row css-1bz4ouw">
                <div class="col-sm-4 tw-min-h-screen tw-bg-white tw-px-6 tw-py-5 css-0 ebd3p831">
                    <a href="https://www.prakerja.go.id" class="tw-flex tw-items-center tw-mb-6 sm:tw-mb-12 hover:tw-no-underline tw-text-primary hover:tw-text-primary-lighter tw-text-sm">
                        <img src="assets/images/left-arrow.svg" alt="left-arrow">
                        <span class="tw-block tw-pl-2">Kembali</span>
                    </a>
                    <a href="https://www.prakerja.go.id" class="tw-block tw-mb-8 sm:tw-mb-12">
                        <img src="assets/images/logo-kartu-prakerja.png" alt="Logo Kartu Prakerja" class="css-avxzix">
                    </a>
                    <div class="login-wrapper my-auto">
                        <h3 class="tw-text-primary tw-text-lg tw-font-bold">Login</h3>
                        <p class="tw-text-primary tw-mb-10">Bagi kamu yang sudah terdaftar, silakan login</p>
                        <form action="#!">
                            <div class="tw-mb-4 css-o2rotx">
                                <div class="tw-relative">
                                    <input name="email" type="email" placeholder="alamat@email.com" class="css-12rkqhi" value=""><label class="css-hxauk4">Email</label></div>
                                <div class="tw-relative">
                                    <div class="tw-relative">
                                        <input name="password" type="password" placeholder="Masukkan password" class="css-12rkqhi e48vd4k0" value="" id="password">
                                        <label class="css-hxauk4 e48vd4k2">Password</label>
                                    </div>
                                    <div id="toggle" onclick="showHide();"></div>
                                </div>
                            </div>
                            <div class="tw-mb-5 css-1391vhs">
                                <div class="tw-mt-4 tw-flex tw-justify-between">
                                    <div class="tw-text-xs tw-text-abu css-1scdakx">
                                        <input type="checkbox" name="remember" class="remember">
                                        <label>Ingat saya</label>
                                    </div>
                                    <a class="tw-text-xs tw-text-primary" href="/lupa-password">Lupa password?</a>
                                </div>
                            </div>
                            <div class="tw-my-4">
                                <button type="submit" class="mr-4 css-1iefhk0">Login</button>
                                <button class="css-gcesyf">Daftar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="css-0 ebd3p832">
                    <div class="css-yatt51 ebd3p830"></div>
                </div>
            </div>
        </div>
    </main>
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