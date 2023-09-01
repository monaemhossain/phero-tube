const contentCategories = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const categoryData = data.data;
    categoryMenu(categoryData)
}

const categoryMenu = (category) => {
    console.log(category);
    const ulWrapper = document.createElement('div');
    ulWrapper.classList = `grid item-center justify-center mb-8`
    const ul = document.createElement('ul');
    ul.classList = `menu menu-horizontal gap-3`;
    ulWrapper.appendChild(ul);
    main.appendChild(ulWrapper)
    category.forEach(item => {
        const categoryName = item.category;
        // console.log(categoryName);
        const li = document.createElement('li');
        li.classList = `bg-base-200 rounded-md hover:bg-[#FF1F3D]`;
        li.innerHTML = `<a class='hover:text-white'>${categoryName}</a>`
        ul.appendChild(li);
    });
    pHeroContent();
}


contentCategories()

const screenWidth = `max-w-screen-xl mx-auto py-5`
const header = document.getElementById('header');
const main = document.getElementById('main');
main.classList = screenWidth;
header.classList = screenWidth;
header.innerHTML = `
<div class="navbar bg-base-100 hidden md:flex">
    <div class="navbar-start">
        <a href="./index.html" class="btn btn-ghost pl-0 hover:cursor-pointer">
            <img src="./images/logo.png" alt="pHero Logo">
        </a>
    </div>
    <div class="navbar-center">
        <a class="btn sort-btn">Sort by view</a>
    </div>
    <div class="navbar-end">
        <a href="./blog.html" class="btn bg-[#FF1F3D] text-white hover:text-black">Blog</a>
    </div>
    
    <div class="md:hidden text-center space-y-3">
        <div>
            <a class="btn btn-ghost pl-0 hover:cursor-pointer">
                <img src="./images/logo.png" alt="pHero Logo">
            </a>
        </div>
        <div>
            <a class="btn sort-btn">Sort by view</a>
        </div>
        <div>
            <a href="./blog.html" class="btn bg-[#FF1F3D]">Blog</a>
        </div>
    </div>
</div>
`;