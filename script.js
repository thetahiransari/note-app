const categories = {
    "Education": [
        { name: "Khan Academy", url: "https://www.khanacademy.org" },
        { name: "Coursera", url: "https://www.coursera.org" }
    ],
    "Entertainment": [
        { name: "YouTube", url: "https://www.youtube.com" },
        { name: "Netflix", url: "https://www.netflix.com" }
    ],
    "Technology": [
        { name: "TechCrunch", url: "https://techcrunch.com" },
        { name: "The Verge", url: "https://www.theverge.com" }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const categoriesContainer = document.getElementById("categories");

    function renderCategories() {
        categoriesContainer.innerHTML = "";
        for (const category in categories) {
            const categorySection = document.createElement("div");
            categorySection.className = "category";

            const categoryHeader = document.createElement("h2");
            categoryHeader.textContent = category;

            const categoryList = document.createElement("ul");

            categories[category].forEach(site => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = site.url;
                link.textContent = site.name;
                link.target = "_blank";
                listItem.appendChild(link);
                categoryList.appendChild(listItem);
            });

            categorySection.appendChild(categoryHeader);
            categorySection.appendChild(categoryList);
            categoriesContainer.appendChild(categorySection);
        }
    }

    renderCategories();

    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', function () {
        const query = searchBar.value.toLowerCase();
        document.querySelectorAll('.category').forEach(category => {
            const matches = category.textContent.toLowerCase().includes(query);
            category.style.display = matches ? 'block' : 'none';
        });
    });

    const addWebsiteForm = document.getElementById('addWebsiteForm');
    addWebsiteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const category = document.getElementById('category').value.trim();
        const name = document.getElementById('name').value.trim();
        const url = document.getElementById('url').value.trim();

        if (!categories[category]) {
            categories[category] = [];
        }

        categories[category].push({ name, url });
        renderCategories();

        addWebsiteForm.reset();
    });
});

