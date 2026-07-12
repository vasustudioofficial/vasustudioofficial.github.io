// Game Database (Jaise C# me GameData ki Struct ya Class banti hai)
const gamesData = [
    {
        id: "Tiger And Goat :offline",
        title: "Tiger And Goat :offline",
        description: "Master the art of strategy with two classic board games in one! Dive into the traditional world of Tiger & Goat (Bagh Bakri) or test your tactical skills in the competitive Red & Green mode. With customizable boards, varying difficulty levels, and unique environments, every match is a fresh challenge.",
        thumbnail: "assets/tigerandgoat.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vasustudio.tigerandgoatoffline",
        featured: true
    },
    {
        id: "Snake And Ladder :offline",
        title: "Snake And Ladder :offline",
        description: "Looking for a fun way to spend time with friends? This version of Snakes & Ladders brings the traditional tabletop experience to life with a lot more variety and control. Whether you want a quick casual match or a high-stakes game, you get to set the rules.",
        thumbnail: "assets/snakeandladder.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vasustudio.snakeandladder",
        featured: true
    },
    {
        id: "Vehicle Runner",
        title: "Vehicle Runner",
        description: "Get ready for the ultimate 2D driving challenge. In Vehicle Runner, your mission is simple: drive, dodge, and survive. Take control of your favorite vehicle and navigate through a never-ending highway filled with unpredictable traffic. How long can you stay on the road before the big crash?",
        thumbnail: "assets/vehiclerunner.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.VasuStudio.VehicleRunner",
        featured: false
    },
    {
        id: "Space Pilot",
        title: "Space Pilot",
        description: "This is a simple 2D space shooter game.You control a plane in space and face continuous enemy attacks.Enemy planes appear again and again.Your goal is to shoot enemy planes and avoid getting hit.",
        thumbnail: "assets/spacepilot.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.VasuStudio.SpacePilot",
        featured: false
    }
];




// 1. C# SwitchState Jaisa Function (Ek time pr ek hi window active rkhna)
function switchSection(sectionId) {
    // Sabhi sections ko dhoondho aur hide kro
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // Target section ko dikhao
    const activeSection = document.getElementById(sectionId);
    if(activeSection) {
        activeSection.classList.add('active-section');
    }

    // Navigation Menu links ka UI update kro
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // Mobile menu open hai toh section click hote hi use band kro
    const menu = document.getElementById('navMenu');
    menu.classList.remove('mobile-active');
}


// 2. Mobile Menu Slide In/Out Toggle Handler
function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('mobile-active');
}



// 3. Dynamic UI Generation Engine (Instantiate UI Prefabs)
function loadGamesUI() {
    const allGamesContainer = document.getElementById('allGamesContainer');
    const featuredContainer = document.getElementById('featuredGameContainer');
    
    let allGamesHTML = "";
    let featuredHTML = "";

    gamesData.forEach(game => {
        // UI Template Element (Jaise Unity me UI prefab hota hai)
        const cardTemplate = `
            <div class="game-card">
                <img src="${game.thumbnail}" alt="${game.title}" class="game-thumbnail">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-desc">${game.description}</p>
                    <a href="${game.playStoreUrl}" target="_blank" class="btn-play">
                    <span class="material-symbols-outlined" style="font-size: 18px; margin-right: 6px; vertical-align: middle;">download</span>Download now
                    </a>
                </div>
            </div>
        `;

        allGamesHTML += cardTemplate;
        if(game.featured) {
            featuredHTML += cardTemplate;
        }
    });

    // DOM Inject
    if(allGamesContainer) allGamesContainer.innerHTML = allGamesHTML;
    if(featuredContainer) featuredContainer.innerHTML = featuredHTML;
}

// Unity Ke Start() method ki tarah page load hote hi initiate hoga
window.onload = function() {
    loadGamesUI();
};





document.addEventListener("DOMContentLoaded", () => {
    
    // 🔴 1. SINGLE CENTRAL DATA SOURCE FOR ALL GAMES
    // Status can be 'live' (for carousel top) or 'upcoming' (for bottom section)
    const studioGamesDatabase = [
        // --- Live Games Section (Carousel) ---
        { 
            name: "Tiger And Goat :offline", 
            desc: "Master the art of strategy with two classic board games in one!", 
            img: "assets/tigerandgoat.png",
            heroImg: "assets/tigerandgoatbanner.png", // 4K Hero asset
            status: "live"
        },
        { 
            name: "Snake And Ladder :offline", 
            desc: "Looking for a fun way to spend time with friends? This version of Snakes & Ladders brings the traditional tabletop experience to life with a lot more variety and control.", 
            img: "assets/snakeandladder.png",
            heroImg: "assets/snakeandladderbanner.png",  // 4k Hero Asset
            status: "live"
        },
        { 
            name: "Vehicle Runner", 
            desc: "Get ready for the ultimate 2D driving challenge.", 
            img: "assets/vehiclerunner.png",
            heroImg: "assets/vehiclerunnerbanner.png",  //4k Hero Asset
            status: "live"
        },
        { 
            name: "Space Pilot", 
            desc: "This is a simple 2D space shooter game.", 
            img: "assets/spacepilot.png",
            heroImg: "assets/spacepilotbanner.png",  // 4k Hero Asset
            status: "live"
        },
       

        // --- Upcoming Games Section (With & Without Graphics) ---
        {
            name: "Car Drive & Park",
            desc: "An upcoming. Master parking, solve puzzles, rescue vehicles, and survive thrilling chases.",
            img: "assets/cardriveandpark.png", // Graphics Link Available
            status: "upcoming",
            projectstatus : "In Testing"
        },
        {
            name: "Match-3 Game",
            desc: "Get ready for an exciting Match-3 puzzle adventure! Match colorful tiles, create powerful combos, and solve fun challenges in a vibrant world full of surprises. Explore unique levels, unlock amazing boosters, and enjoy smooth, satisfying gameplay. Stay tuned—our exciting Match-3 experience is coming soon!",
            img: "", // 🔴 Empty String/No Link: Graphics unavailable!
            status: "upcoming",
            projectstatus : "In Development"
        }
    ];


    // 🔴 2. ENGINE PART A: RENDERING LIVE PROJECTS (CAROUSEL)
    const trackElement = document.getElementById("studioCarouselTrack");
    if (trackElement) {
        const liveGames = studioGamesDatabase.filter(game => game.status === "live");
        
        const buildCarouselHTML = (dataArray) => {
            return dataArray.map(game => `
                <div class="carousel-item-node">
                    <img src="${game.img}" alt="${game.name}" class="carousel-banner-img">
                    <div class="carousel-meta-overlay">
                        <span class="carousel-game-name">${game.name}</span>
                        <span class="carousel-game-desc">${game.desc}</span>
                    </div>
                </div>
            `).join('');
        };

        const carouselHTML = buildCarouselHTML(liveGames);
        trackElement.innerHTML = carouselHTML + carouselHTML; // Double for infinite track
    }


    // 🔴 3. ENGINE PART B: RENDERING UPCOMING PROJECTS (WITH CONDITIONAL GRAPHICS RIGHT-ALIGNMENT)
    const upcomingContainer = document.getElementById("upcomingGamesContainer");
    if (upcomingContainer) {
        const upcomingGames = studioGamesDatabase.filter(game => game.status === "upcoming");

        upcomingContainer.innerHTML = upcomingGames.map(game => {
            // Check karega ki image asset dynamic array me link ke sath exist karta hai ya nahi
            const hasGraphics = game.img && game.img.trim() !== "";
            
            // Conditional Module generation logic
            const graphicsMarkup = hasGraphics ? `
                <div class="upcoming-card-right-graphics">
                    <img src="${game.img}" alt="${game.name} Graphics" class="upcoming-graphics-asset">
                </div>
            ` : ''; // Agar graphics nahi hai to right section empty string pass hoga

            return `
                <div class="upcoming-card-node">
                    <div class="upcoming-card-left-text">
                        <span class="upcoming-badge">${game.projectstatus}</span>
                        <h4 class="upcoming-title">${game.name}</h4>
                        <p class="upcoming-desc">${game.desc}</p>
                    </div>
                    ${graphicsMarkup}
                </div>
            `;
        }).join('');
    }


     // ================= DYNAMIC HERO SLIDER IMPLEMENTATION =================
    const viewport = document.getElementById("heroSliderViewport");
    const titleElement = document.getElementById("sliderGameTitle").querySelector(".title-node-name");
    const prevBtn = document.getElementById("sliderPrevBtn");
    const nextBtn = document.getElementById("sliderNextBtn");
    const dotsContainer = document.getElementById("sliderDotsContainer");

    let currentSlideIndex = 0;
    const liveGames = studioGamesDatabase.filter(g => g.status === "live");

    if (viewport && liveGames.length > 0) {
        
        // 1. Render slides and dots dynamically based on database size
        viewport.innerHTML = liveGames.map((game, idx) => `
            <div class="slide-banner-node ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                <img src="${game.heroImg}" alt="${game.name}">
            </div>
        `).join('');

        dotsContainer.innerHTML = liveGames.map((_, idx) => `
            <div class="slider-dot ${idx === 0 ? 'active' : ''}" data-go-to="${idx}"></div>
        `).join('');

        const slides = document.querySelectorAll(".slide-banner-node");
        const dots = document.querySelectorAll(".slider-dot");

        // 2. Main Update Function Pipeline
        const updateSliderState = (newIndex) => {
            // Remove active classes
            slides[currentSlideIndex].classList.remove("active");
            dots[currentSlideIndex].classList.remove("active");

            // Apply active states to target elements
            currentSlideIndex = newIndex;
            slides[currentSlideIndex].classList.add("active");
            dots[currentSlideIndex].classList.add("active");

            // Update floating top corner title with smooth pop effect
            titleElement.style.opacity = 0;
            setTimeout(() => {
                titleElement.textContent = liveGames[currentSlideIndex].name;
                titleElement.style.opacity = 1;
            }, 200);
        };

        // Initialize first slide title text strings
        titleElement.textContent = liveGames[0].name;

        // 3. Click Event Handlers for Next/Prev Controllers
        nextBtn.addEventListener("click", () => {
            let targetIdx = (currentSlideIndex + 1) % liveGames.length; // Loops cleanly back to 0 at end
            updateSliderState(targetIdx);
        });

        prevBtn.addEventListener("click", () => {
            let targetIdx = (currentSlideIndex - 1 + liveGames.length) % liveGames.length; // Loops cleanly back to max length
            updateSliderState(targetIdx);
        });

        // 4. Dot Navigation click controls
        dotsContainer.addEventListener("click", (e) => {
            const targetedDot = e.target.closest(".slider-dot");
            if (!targetedDot) return;
            const destinationIndex = parseInt(targetedDot.getAttribute("data-go-to"));
            updateSliderState(destinationIndex);
        });

        // 5. Automatic Slider Rotation (Rotates every 6 seconds seamlessly)
        setInterval(() => {
            let targetIdx = (currentSlideIndex + 1) % liveGames.length;
            updateSliderState(targetIdx);
        }, 6000);
    }

});


