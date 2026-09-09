
// 1. Expanded Games Data Matrix with Media Reference Assets
const gamesData = [

     {
        id: "GridMorph: Match 3",
        title: "GridMorph: Match 3",
        description: "Welcome to a fun and colorful Match-3 puzzle game with multiple themes to enjoy!",
        thumbnail: "assets/gridmorphpuzzle.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vasustudio.gridmorphpuzzle",
        featured: true,
        // Game specific media assets
        media: {
            screenshots: [
                "assets/fruitmatch-3.png",
                "assets/matchblast.png"
            ]
        }
    },
    {
        id: "Car Drive & Park",
        title: "Car Drive & Park",
        description: "Enjoy different types of car parking and driving challenges in a single game. Complete parking levels, solve car puzzles, rescue trapped vehicles, and take on exciting driving missions.",
        thumbnail: "assets/cardriveandpark.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vasustudio.cardriveandpark",
        featured: true,
        // Game specific media assets
        media: {
            screenshots: [
                "assets/cardriveandparkgameplay.png",
                "assets/cardriveandparkpuzzelpark.png"
            ]
        }
    },
    {
        id: "tiger_and_goat",
        title: "Tiger And Goat :offline",
        description: "Master the art of strategy with two classic board games in one! Dive into the traditional world of Tiger & Goat (Bagh Bakri) or test your tactical skills in the competitive Red & Green mode. With customizable boards, varying difficulty levels, and unique environments, every match is a fresh challenge.",
        thumbnail: "assets/tigerandgoat.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vasustudio.tigerandgoatoffline",
        featured: true,
        // Game specific media assets
        media: {
            screenshots: [
                "assets/tigerandgoatgameplay.png",
                "assets/tigergoatgoplay.png",
                "assets/tigerandgoatboard.png"
            ]
        }
    },
    {
        id: "snake_and_ladder",
        title: "Snake And Ladder :offline",
        description: "Looking for a fun way to spend time with friends? This version of Snakes & Ladders brings the traditional tabletop experience to life with a lot more variety and control. Whether you want a quick casual match or a high-stakes game, you get to set the rules.",
        thumbnail: "assets/snakeandladder.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.vasustudio.snakeandladder",
        featured: false,
        media: {
            screenshots: [
                "assets/snakeandladdergameplay.png",
                "assets/snakeandladderboard.png",
                "assets/snakeandladderhighqulityboard.png"
            ]
        }
    },
    {
        id: "vehicle_runner",
        title: "Vehicle Runner",
        description: "Get ready for the ultimate 2D driving challenge. In Vehicle Runner, your mission is simple: drive, dodge, and survive. Take control of your favorite vehicle and navigate through a never-ending highway filled with unpredictable traffic. How long can you stay on the road before the big crash?",
        thumbnail: "assets/vehiclerunner.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.VasuStudio.VehicleRunner",
        featured: false,
        media: {
            screenshots: [
        
            ]
        }
    },
    {
        id: "space_pilot",
        title: "Space Pilot",
        description: "This is a simple 2D space shooter game. You control a plane in space and face continuous enemy attacks. Enemy planes appear again and again. Your goal is to shoot enemy planes and avoid getting hit.",
        thumbnail: "assets/spacepilot.png",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.VasuStudio.SpacePilot",
        featured: false,
        media: {
            screenshots: [
                
            ]
        }
    }
];





// 2. Global Section Management System
function switchSection(sectionId) {
    // Agar standalone view active hai toh use band karo aur scroll unlock karo
    const detailView = document.getElementById('gameDetailStandaloneSection');
    if (detailView) {
        detailView.classList.remove('view-active');
        document.body.style.overflow = "auto";
    }

    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    const activeSection = document.getElementById(sectionId);
    if(activeSection) {
        activeSection.classList.add('active-section');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const onclickAttr = link.getAttribute('onclick');
        if(onclickAttr && onclickAttr.includes(sectionId)) {
            link.classList.add('active');
        }
    });

    const menu = document.getElementById('navMenu');
    if(menu) menu.classList.remove('mobile-active');
}

// 3. Mobile View Controller Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    if(menu) menu.classList.toggle('mobile-active');
}

// 3. Main Dashboard Renderer
function loadGamesUI() {
    const allGamesContainer = document.getElementById('allGamesContainer');
    const featuredContainer = document.getElementById('featuredGameContainer');
    
    let allGamesHTML = "";
    let featuredHTML = "";

    gamesData.forEach(game => {
        const cardTemplate = `
            <div class="game-card">
                <img src="${game.thumbnail}" alt="${game.title}" class="game-thumbnail">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-desc">${game.description}</p>
                    <div class="action-buttons-group" style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
                        <a href="${game.playStoreUrl}" target="_blank" class="btn-play" style="text-align: center;">
                            <span class="material-symbols-outlined" style="font-size: 18px; margin-right: 6px; vertical-align: middle;">download</span>Download Now
                        </a>
                        <button onclick="navigateToGameDetails('${game.id}')" class="btn-about" style="display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; border-radius: 6px; cursor: pointer; font-weight: 6px; transition: 0.2s;">
                            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>About Game
                        </button>
                    </div>
                </div>
            </div>
        `;

        allGamesHTML += cardTemplate;
        if(game.featured) {
            featuredHTML += cardTemplate;
        }
    });

    if(allGamesContainer) allGamesContainer.innerHTML = allGamesHTML;
    if(featuredContainer) featuredContainer.innerHTML = featuredHTML;
}



// 4. Standalone Full Page Route Handler (Google Style Redirect)
function navigateToGameDetails(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if(!game) return;

    let detailView = document.getElementById('gameDetailStandaloneSection');
    if(!detailView) {
        detailView = document.createElement('div');
        detailView.id = 'gameDetailStandaloneSection';
        detailView.className = 'standalone-detail-page';
        document.body.appendChild(detailView);
    }


    let screenshotsHTML = "";
    if(game.media.screenshots && game.media.screenshots.length > 0) {
        let itemsHTML = "";
        game.media.screenshots.forEach(src => {
            itemsHTML += `
                <div class="portrait-frame-card">
                    <img src="${src}" alt="Gameplay Frame">
                </div>
            `;
        });
        
        screenshotsHTML = `
            <div class="detail-media-section">
                <h3 class="detail-section-title">Gameplay Showcase</h3>
                <div class="horizontal-scroll-gallery">
                    ${itemsHTML}
                </div>
            </div>
        `;
    }

    // Full Screen Static View DOM Layout Inject
    detailView.innerHTML = `
        <div class="detail-page-wrapper">
            <!-- Navigation Back Controls -->
            <div class="detail-back-nav">
                <button onclick="closeGameDetailsView()" class="btn-back-link">
                    <span class="material-symbols-outlined">arrow_back</span> Back to Hub
                </button>
            </div>

            <!-- Identity Header Block -->
            <div class="detail-main-header">
                <img src="${game.thumbnail}" alt="${game.title}" class="detail-studio-logo">
                <div class="detail-header-meta">
                    <h1>${game.title}</h1>
                    <span class="studio-badge-label">Vasu Studio</span>
                </div>
            </div>

            <!-- Download Command Strip -->
            <div class="detail-action-strip">
                <a href="${game.playStoreUrl}" target="_blank" class="btn-play detail-cta-download">
                    <span class="material-symbols-outlined">download</span> Download from Play Store
                </a>
            </div>

            <!-- Core Description Block -->
            <div class="detail-content-body">
                <h3 class="detail-section-title">Overview</h3>
                <p class="detail-long-description">${game.description}</p>
            </div>

            <!-- Dynamic Graphical Arrays -->
            ${screenshotsHTML}
        </div>
    `;

    // Active state toggles (Full screen layer activate layout)
    detailView.classList.add('view-active');
    window.scrollTo({ top: 0, behavior: 'instant' }); // View jump smoothly to top
}

// 5. Back Routing Engine Function
function closeGameDetailsView() {
    const detailView = document.getElementById('gameDetailStandaloneSection');
    if (detailView) {
        detailView.classList.remove('view-active');
    }
}

window.onload = function() {
    loadGamesUI();
};






document.addEventListener("DOMContentLoaded", () => {
    
    // 🔴 1. SINGLE CENTRAL DATA SOURCE FOR ALL GAMES
    // Status can be 'live' (for carousel top) or 'upcoming' (for bottom section)
    const studioGamesDatabase = [
        // --- Live Games Section (Carousel) ---
        { 
            name: "GridMorph: Match 3", 
            desc: "Welcome to a fun and colorful Match-3 puzzle game with multiple themes to enjoy!", 
            img: "assets/gridmorphpuzzle.png",
            heroImg: "assets/match-34K.png", // 4K Hero asset
            status: "live"
        },
        { 
            name: "Car Drive & Park", 
            desc: "Enjoy different types of car parking and driving challenges in a single game.", 
            img: "assets/cardriveandpark.png",
            heroImg: "assets/cardriveandparkbanner.png", // 4K Hero asset
            status: "live"
        },
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
            name: "Math Puzzle",
            desc: "Get ready for an exciting math puzzle adventure! Match numbers, solve simple arithmetic challenges, and create rewarding combinations in a fun, brain-teasing game. Explore relaxing levels, enjoy smooth gameplay, and test your quick-thinking math skills. Stay tuned—our fresh math puzzle experience is coming soon!",
            img: "", // Graphics Link Available
            status: "upcoming",
            projectstatus : "In Testing"
        },
        {
            name: "Bubble Shooter",
            desc: "Coming Soon! Bubble Shooter is currently in development. Get ready to enjoy a fun and relaxing bubble-popping adventure with colorful levels, simple controls, and exciting challenges. Stay tuned for the official release!",
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


