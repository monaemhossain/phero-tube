const screenWidth = `max-w-screen-xl mx-auto py-5`
const main = document.getElementById('main');
main.classList = screenWidth;

const header = document.getElementById('header');
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

// pHero data
const contentCategories = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await response.json();
    const categoryData = data.data;
    categoryMenu(categoryData)
    pHeroContent('1000', categoryData);
}


// pHero menu for content by category
const categoryMenu = (category) => {
    const menuWrapper = document.getElementById('menu-wrapper');
    menuWrapper.classList = `grid item-center justify-center mb-8`
    const ul = document.createElement('ul');
    // ul.id='menu';
    ul.classList = `menu menu-horizontal gap-3`;
    menuWrapper.appendChild(ul);
    main.appendChild(menuWrapper)
    category.forEach(item => {
        const categoryName = item.category;
        const categoryId = item.category_id;
        // console.log(categoryName);
        const li = document.createElement('li');
        li.classList = `bg-base-200 rounded-md hover:bg-[#FF1F3D]`;
        li.innerHTML = `<a onclick="pHeroContent('${categoryId}')" class='hover:text-white'>${categoryName}</a>`
        ul.appendChild(li);
    });
};

// pHero Contents
const pHeroContent = async (categoryIdValue, status) => {
    // console.log(categoryIdValue);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryIdValue}`);
    const data = await response.json();
    const contentData = data.data;
    const dataStatus = data.status;
    // console.log(data.status);

    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.classList = '';
    contentWrapper.innerHTML = '';

    if(dataStatus == true){
        contentWrapper.classList = "grid grid-cols-4 gap-6";
        main.appendChild(contentWrapper);
        contentData.forEach(content => {
            // card data
            const thumbnail = content.thumbnail;
            const title = content.title;
            const profilePicture = content.authors[0].profile_picture;
            const authorName = content.authors[0].profile_name;
            const verified = content.authors[0].verified;
            const views = content.others.views;

            const card = document.createElement('div');
            card.classList = "card max-w-xs bg-base-100";
            card.innerHTML = `
            <figure class="h-52 bg-white rounded-lg"><img src="${thumbnail}" alt="${title}" class="h-full w-full"/></figure>
            <div class="card-body p-5 flex-row items-start justify-start gap-4">
                <div class='h-10 w-10'>
                    <img src="${profilePicture}" alt="${authorName}" class="h-full w-full rounded-full"/>
                </div>

                <div class="space-y-1">
                    <h2 class="card-title text-base">${title}</h2>

                    <div class="text-gray-500 text-base space-y-1">
                        <p class="flex justify-start items-center">
                            <span>${authorName}</span>
                            <span class="pl-1 mt-1">${verified?'<img src="./images/verify.png" alt="verified author" class="h-5 w-5">': ""}</span>
                        </p>
                        <p>${views} Views</p>
                    </div>
                </div>
            </div>
            `
            contentWrapper.appendChild(card);
        });
    }else{
        contentWrapper.classList = "no-content";
        const noContent = document.createElement('div');
        noContent.classList =  "grid justify-center items-center h-full mt-24";
        noContent.innerHTML = `
        <div class="card w-96 text-center">
            <figure><img src="./images/nodataicon.png" alt="No content icon" /></figure>
            <div class="card-body">
                <h2 class="card-title text-3xl font-bold">
                    Oops!! Sorry, There is no content here
                </h2>
            </div>
        </div>
        `;
        contentWrapper.appendChild(noContent);
    }
}

contentCategories()