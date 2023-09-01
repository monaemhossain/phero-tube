const header = document.getElementById('header');
header.classList = `max-w-screen-xl mx-auto py-5`;
header.innerHTML = `
<div class="navbar bg-base-100 hidden md:flex">
    <div class="navbar-start">
        <a href="./index.html" class="btn btn-ghost pl-0 hover:cursor-pointer">
            <img src="./images/logo.png" alt="pHero Logo">
        </a>
    </div>
    <div class="navbar-center">
        <a class="btn">Sort by view</a>
    </div>
    <div class="navbar-end">
        <a href="./blog.html" class="btn">Blog</a>
    </div>
    </div>
    <div class="md:hidden text-center space-y-3">
    <div>
        <a class="btn btn-ghost pl-0 hover:cursor-pointer">
            <img src="./images/logo.png" alt="pHero Logo">
        </a>
    </div>
    <div>
        <a class="btn">Sort by view</a>
    </div>
    <div>
        <a class="btn">Blog</a>
    </div>
</div>
`;