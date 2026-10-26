
        /*************************************************************************
         * PHẦN 1: BỘ HÌNH VẼ ICON ĐẠI DIỆN KIẾN TRÚC (2D/SVG ILLUSTRATED ASSETS)
         * Mỗi công trình được vẽ chi tiết bằng SVG Isometric chuẩn phong cách hình mẫu
         *************************************************************************/
        const STATIONS_DATA = [
            {
    "id": "uxui",
    "code": "HỒ SƠ • 01",
    "label": "Justin",
    "fullName": "Huyền Thủy Các — Justin Developer",
    "subtitle": "Lập trình viên độc lập tại Việt Nam. Từ ý tưởng đến giao diện, hệ thống và sản phẩm thực tế.",
    "metrics": [
        {
            "label": "Cách làm",
            "value": "Tinh gọn"
        },
        {
            "label": "Trọng tâm",
            "value": "Sản phẩm"
        },
        {
            "label": "Múi giờ",
            "value": "GMT+7"
        }
    ],
    "skills": [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "MariaDB",
        "Git & Vercel"
    ],
    "projects": [
        {
            "title": "Xin chào, tôi là Justin.",
            "role": "Developer",
            "desc": "Tôi thích biến những ý tưởng phức tạp thành sản phẩm dễ dùng, dễ bảo trì. Mỗi công trình trên bản đồ là một góc trong công việc của tôi.",
            "tags": [
                "Giao diện",
                "Hệ thống",
                "Sản phẩm"
            ]
        },
        {
            "title": "Khám phá những gì tôi đang xây dựng",
            "role": "GitHub",
            "desc": "Mã nguồn và các dự án của tôi được tập hợp trên GitHub. Ghé qua để tìm hiểu thêm về cách tôi làm việc.",
            "tags": [
                "Source code",
                "Projects"
            ],
            "url": "https://github.com/neyugn-yuh"
        }
    ],
    "position": {
        "x": 0.4,
        "y": 0.3,
        "z": 0.2
    },
    "camOffset": {
        "x": 6.5,
        "y": 7.2,
        "z": 7.5
    },
    "accentColor": "#3b82f6",
    "roofColor": "#2d3a4a",
                svgArt: `
                <svg viewBox="0 0 220 220" class="w-full h-44 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Glowing Pond Base -->
                    <polygon points="110,198 42,164 68,128 152,128 178,164" fill="#BCE3E8" stroke="#4A3228" stroke-width="3.5"/>
                    <ellipse cx="110" cy="160" rx="44" ry="20" fill="#63D2FF" opacity="0.75"/>
                    <ellipse cx="110" cy="160" rx="30" ry="12" fill="#BDF0FF"/>
                    <!-- Wooden Pillars -->
                    <rect x="68" y="102" width="9" height="58" rx="3" fill="#7C4D3B" stroke="#4A3228" stroke-width="2.5"/>
                    <rect x="143" y="102" width="9" height="58" rx="3" fill="#7C4D3B" stroke="#4A3228" stroke-width="2.5"/>
                    <rect x="92" y="112" width="8" height="55" rx="3" fill="#5E3829" stroke="#4A3228" stroke-width="2.5"/>
                    <rect x="120" y="112" width="8" height="55" rx="3" fill="#5E3829" stroke="#4A3228" stroke-width="2.5"/>
                    <!-- Lower Tier Dark Slate Pagoda Roof -->
                    <path d="M32 108 Q110 72 188 108 L166 120 Q110 98 54 120 Z" fill="#364559" stroke="#232B38" stroke-width="3"/>
                    <!-- Upper Tier Roof -->
                    <path d="M52 78 Q110 42 168 78 L150 92 Q110 70 70 92 Z" fill="#465973" stroke="#232B38" stroke-width="3"/>
                    <!-- Spire Tip -->
                    <path d="M95 52 L110 20 L125 52 Z" fill="#5C7394" stroke="#232B38" stroke-width="3"/>
                    <circle cx="110" cy="18" r="5" fill="#F6C358" stroke="#4A3228" stroke-width="2"/>
                    <!-- Green & Wisteria Vines on Roof -->
                    <path d="M68 72 C75 88, 65 100, 72 115" stroke="#68A347" stroke-width="5" stroke-linecap="round"/>
                    <circle cx="72" cy="112" r="5" fill="#8B5CF6"/>
                    <circle cx="65" cy="102" r="4.5" fill="#A78BFA"/>
                    <!-- Mini White Lantern Trees -->
                    <g transform="translate(38, 128)">
                        <path d="M12 20 L12 36" stroke="#5C3A31" stroke-width="4"/>
                        <ellipse cx="12" cy="22" rx="12" ry="6" fill="#FCE8E6" stroke="#5C3A31" stroke-width="2"/>
                        <ellipse cx="12" cy="14" rx="10" ry="5" fill="#FFF5F5" stroke="#5C3A31" stroke-width="2"/>
                        <ellipse cx="12" cy="7" rx="7" ry="4" fill="#FFFFFF" stroke="#5C3A31" stroke-width="2"/>
                    </g>
                    <g transform="translate(158, 128)">
                        <path d="M12 20 L12 36" stroke="#5C3A31" stroke-width="4"/>
                        <ellipse cx="12" cy="22" rx="12" ry="6" fill="#FCE8E6" stroke="#5C3A31" stroke-width="2"/>
                        <ellipse cx="12" cy="14" rx="10" ry="5" fill="#FFF5F5" stroke="#5C3A31" stroke-width="2"/>
                        <ellipse cx="12" cy="7" rx="7" ry="4" fill="#FFFFFF" stroke="#5C3A31" stroke-width="2"/>
                    </g>
                </svg>`
            },
            {
    "id": "visual",
    "code": "GIAO DIỆN • 02",
    "label": "Giao diện",
    "fullName": "Bích Ngọc Đình — Giao diện & Tương tác",
    "subtitle": "Giao diện rõ ràng, chuyển động có chủ đích và trải nghiệm trên nhiều màn hình.",
    "metrics": [
        {
            "label": "Giao diện",
            "value": "React"
        },
        {
            "label": "Ngôn ngữ",
            "value": "TypeScript"
        },
        {
            "label": "Đồ họa",
            "value": "Three.js"
        }
    ],
    "skills": [
        "React",
        "TypeScript",
        "HTML & CSS",
        "Responsive UI",
        "Three.js",
        "SVG"
    ],
    "projects": [
        {
            "title": "Portfolio — Linh Cảnh",
            "role": "Website tương tác",
            "desc": "Không gian cổ phong 3D đang mở trước mắt bạn: năm công trình, chuyển cảnh ngày đêm và những câu chuyện phía sau sản phẩm.",
            "tags": [
                "Three.js",
                "WebGL",
                "SVG"
            ],
            "url": "https://github.com/neyugn-yuh/portfolio"
        },
        {
            "title": "TodoFlow",
            "role": "Web application",
            "desc": "Không gian quản lý công việc hằng ngày, tài khoản cá nhân, lịch sử hoàn thành và tự động chuyển việc sang ngày mới.",
            "tags": [
                "React",
                "TanStack Start",
                "MariaDB"
            ],
            "url": "https://todo.justin-dev.space"
        }
    ],
    "position": {
        "x": -4.2,
        "y": 0.7,
        "z": -2.8
    },
    "camOffset": {
        "x": -1.5,
        "y": 6.8,
        "z": 3.8
    },
    "accentColor": "#10b981",
    "roofColor": "#1f7a5c",
                svgArt: `
                <svg viewBox="0 0 220 220" class="w-full h-44 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Mossy Cliff & Waterfall Base -->
                    <path d="M40 155 Q110 195 180 155 L165 125 L55 125 Z" fill="#8CC054" stroke="#4A3228" stroke-width="3"/>
                    <path d="M55 150 L95 178 L145 172 L168 145 L140 125 L70 125 Z" fill="#9FA8A3" stroke="#4A3228" stroke-width="2.5"/>
                    <!-- Waterfall Stream -->
                    <path d="M88 128 C82 148, 92 165, 84 182 L118 182 C122 162, 112 145, 118 128 Z" fill="#7CE8FF"/>
                    <!-- Red Lacquer Pillars -->
                    <rect x="75" y="88" width="8" height="44" fill="#D94E34" stroke="#4A3228" stroke-width="2.5"/>
                    <rect x="137" y="88" width="8" height="44" fill="#D94E34" stroke="#4A3228" stroke-width="2.5"/>
                    <!-- Jade Green Double Tiered Roof -->
                    <path d="M42 96 Q110 64 178 96 L158 108 Q110 86 62 108 Z" fill="#238867" stroke="#164A39" stroke-width="3"/>
                    <path d="M62 72 Q110 38 158 72 L142 84 Q110 64 78 84 Z" fill="#34A882" stroke="#164A39" stroke-width="3"/>
                    <!-- Golden Finial -->
                    <circle cx="110" cy="44" r="6" fill="#F6C358" stroke="#4A3228" stroke-width="2.5"/>
                    <!-- Hanging Warm Lanterns -->
                    <circle cx="64" cy="108" r="6" fill="#FF9F43" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="156" cy="108" r="6" fill="#FF9F43" stroke="#4A3228" stroke-width="2"/>
                </svg>`
            },
            {
    "id": "system",
    "code": "HỆ THỐNG • 03",
    "label": "Hệ thống",
    "fullName": "Hắc Vũ Điện — Hệ thống & Triển khai",
    "subtitle": "Phía sau giao diện: dữ liệu bền vững, luồng xử lý rõ ràng và triển khai sản phẩm lên web.",
    "metrics": [
        {
            "label": "Dữ liệu",
            "value": "MariaDB"
        },
        {
            "label": "Triển khai",
            "value": "Vercel"
        },
        {
            "label": "Quản lý mã",
            "value": "Git"
        }
    ],
    "skills": [
        "Node.js",
        "MariaDB",
        "Authentication",
        "GitHub",
        "Vercel",
        "Deployment"
    ],
    "projects": [
        {
            "title": "TodoFlow — dữ liệu & tài khoản",
            "role": "Full-stack",
            "desc": "Ứng dụng công việc có tài khoản riêng, lưu trữ MariaDB và lịch sử hoàn thành.",
            "tags": [
                "Database",
                "Authentication",
                "Full-stack"
            ],
            "url": "https://github.com/neyugn-yuh/justin-todo-list"
        },
        {
            "title": "Server Deployment",
            "role": "Dự án trên GitHub",
            "desc": "Dự án triển khai máy chủ trong bộ sưu tập công cụ của tôi. Xem repository để khám phá mã nguồn.",
            "tags": [
                "Tools",
                "Deployment"
            ],
            "url": "https://github.com/neyugn-yuh/server-deployment"
        }
    ],
    "position": {
        "x": 4.5,
        "y": 0.6,
        "z": -3.1
    },
    "camOffset": {
        "x": 8.5,
        "y": 6.8,
        "z": 2.5
    },
    "accentColor": "#ef4444",
    "roofColor": "#25242b",
                svgArt: `
                <svg viewBox="0 0 220 220" class="w-full h-44 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Stone Sanctuary Platform -->
                    <ellipse cx="110" cy="164" rx="58" ry="24" fill="#F0E2D0" stroke="#4A3228" stroke-width="3"/>
                    <!-- Tall Crimson Columns -->
                    <rect x="72" y="88" width="9" height="72" fill="#C83E2B" stroke="#4A3228" stroke-width="2.5"/>
                    <rect x="139" y="88" width="9" height="72" fill="#C83E2B" stroke="#4A3228" stroke-width="2.5"/>
                    <rect x="105" y="94" width="9" height="68" fill="#A32C1C" stroke="#4A3228" stroke-width="2.5"/>
                    <!-- Obsidian Black & Crimson Sweeping Roof -->
                    <path d="M40 94 Q110 52 180 94 L160 110 Q110 82 60 110 Z" fill="#242329" stroke="#121114" stroke-width="3"/>
                    <path d="M62 66 Q110 30 158 66 L142 80 Q110 58 78 80 Z" fill="#32313A" stroke="#121114" stroke-width="3"/>
                    <!-- Red Glowing Talismans / Lanterns -->
                    <circle cx="56" cy="104" r="6" fill="#FF5252" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="164" cy="104" r="6" fill="#FF5252" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="110" cy="132" r="11" fill="#FF793F" opacity="0.85"/>
                </svg>`
            },
            {
    "id": "graphic",
    "code": "DỰ ÁN • 04",
    "label": "Dự án",
    "fullName": "Bách Nghệ Phường — Dự án chọn lọc",
    "subtitle": "Những sản phẩm và công cụ tôi đang xây dựng. Mở từng dự án để trải nghiệm hoặc xem mã nguồn.",
    "metrics": [
        {
            "label": "Công việc",
            "value": "TodoFlow"
        },
        {
            "label": "Công cụ",
            "value": "Dispatch"
        },
        {
            "label": "Không gian",
            "value": "Portfolio"
        }
    ],
    "skills": [
        "Web applications",
        "Developer tools",
        "Interactive websites",
        "Product UI"
    ],
    "projects": [
        {
            "title": "TodoFlow",
            "role": "Ứng dụng",
            "desc": "Quản lý công việc hằng ngày, theo dõi tiến độ và giữ lịch sử hoàn thành trong không gian cá nhân.",
            "tags": [
                "React",
                "MariaDB"
            ],
            "url": "https://todo.justin-dev.space"
        },
        {
            "title": "Dev Dispatch",
            "role": "Dự án web",
            "desc": "Một dự án khác trong bộ sưu tập của tôi. Truy cập website để khám phá.",
            "tags": [
                "Web",
                "Tools"
            ],
            "url": "https://dispatch.justin-dev.space"
        },
        {
            "title": "Justin Server",
            "role": "Website",
            "desc": "Website dự án máy chủ, với mã nguồn trong repository justin-server-website.",
            "tags": [
                "Website",
                "Server"
            ],
            "url": "https://github.com/neyugn-yuh/justin-server-website"
        }
    ],
    "position": {
        "x": -3.8,
        "y": 0.2,
        "z": 2.3
    },
    "camOffset": {
        "x": -1.2,
        "y": 6.2,
        "z": 8.2
    },
    "accentColor": "#f59e0b",
    "roofColor": "#6e4736",
                svgArt: `
                <svg viewBox="0 0 220 220" class="w-full h-44 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- White Blossom Pagoda Trees Background -->
                    <g transform="translate(36, 92)">
                        <ellipse cx="24" cy="52" rx="22" ry="10" fill="#F7D7D4" stroke="#4A3228" stroke-width="2.5"/>
                        <ellipse cx="24" cy="36" rx="18" ry="8" fill="#FCE8E6" stroke="#4A3228" stroke-width="2.5"/>
                        <ellipse cx="24" cy="22" rx="13" ry="6" fill="#FFFFFF" stroke="#4A3228" stroke-width="2.5"/>
                    </g>
                    <!-- Artisan Wooden Workshop Cart -->
                    <rect x="88" y="108" width="76" height="48" rx="6" fill="#7A4B3A" stroke="#3D2219" stroke-width="3"/>
                    <rect x="96" y="116" width="60" height="26" rx="4" fill="#F9D390" stroke="#3D2219" stroke-width="2"/>
                    <!-- Thatched / Timber Roof -->
                    <path d="M76 112 L126 78 L176 112 Z" fill="#8C5843" stroke="#3D2219" stroke-width="3"/>
                    <!-- Wooden Wagon Wheels -->
                    <circle cx="104" cy="160" r="14" fill="#4E2F24" stroke="#2B1811" stroke-width="3"/>
                    <circle cx="104" cy="160" r="5" fill="#D99B26"/>
                    <circle cx="148" cy="160" r="14" fill="#4E2F24" stroke="#2B1811" stroke-width="3"/>
                    <circle cx="148" cy="160" r="5" fill="#D99B26"/>
                </svg>`
            },
            {
    "id": "contact",
    "code": "LIÊN HỆ • 05",
    "label": "Liên hệ",
    "fullName": "Kim Quất Thụ — Kết nối với Justin",
    "subtitle": "Có ý tưởng muốn cùng xây dựng? Ghé qua GitHub để bắt đầu cuộc trò chuyện.",
    "metrics": [
        {
            "label": "Ngôn ngữ",
            "value": "VI / EN"
        },
        {
            "label": "Múi giờ",
            "value": "GMT+7"
        },
        {
            "label": "Kết nối",
            "value": "GitHub"
        }
    ],
    "skills": [
        "Web development",
        "Full-stack",
        "Trao đổi dự án",
        "Hợp tác"
    ],
    "projects": [
        {
            "title": "GitHub / neyugn-yuh",
            "role": "Mã nguồn & Kết nối",
            "desc": "Khám phá repository, sản phẩm và những thử nghiệm mới của tôi. Kết nối qua hồ sơ GitHub.",
            "tags": [
                "GitHub",
                "Projects"
            ],
            "url": "https://github.com/neyugn-yuh"
        }
    ],
    "position": {
        "x": 4.1,
        "y": 0.2,
        "z": 2.5
    },
    "camOffset": {
        "x": 8.2,
        "y": 6.2,
        "z": 8.5
    },
    "accentColor": "#f97316",
    "roofColor": "#d97706",
                svgArt: `
                <svg viewBox="0 0 220 220" class="w-full h-44 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Stone Circle Base -->
                    <ellipse cx="122" cy="170" rx="52" ry="20" fill="#E8DEC8" stroke="#4A3228" stroke-width="3"/>
                    <!-- Small Wooden Messenger Hut -->
                    <rect x="52" y="132" width="42" height="36" fill="#8C5A44" stroke="#4A3228" stroke-width="2.5"/>
                    <path d="M44 136 L73 110 L102 136 Z" fill="#E5A93C" stroke="#4A3228" stroke-width="2.5"/>
                    <!-- Lush Persimmon / Golden Orange Tree -->
                    <path d="M126 168 C126 140, 134 115, 128 92" stroke="#6E4434" stroke-width="14" stroke-linecap="round"/>
                    <circle cx="128" cy="78" r="38" fill="#4D8B31" stroke="#2D571B" stroke-width="3"/>
                    <circle cx="102" cy="88" r="26" fill="#5CA13B" stroke="#2D571B" stroke-width="3"/>
                    <circle cx="154" cy="86" r="28" fill="#5CA13B" stroke="#2D571B" stroke-width="3"/>
                    <!-- Glowing Oranges / Persimmons -->
                    <circle cx="115" cy="68" r="8" fill="#FF7B1C" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="142" cy="64" r="9" fill="#FF8C24" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="96" cy="86" r="8" fill="#FF7B1C" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="132" cy="92" r="8.5" fill="#FF9838" stroke="#4A3228" stroke-width="2"/>
                    <circle cx="160" cy="84" r="8" fill="#FF7B1C" stroke="#4A3228" stroke-width="2"/>
                </svg>`
            }
        ];

        // Render Step 1: 2D SVG Icon Blueprint Grid
        function renderSvgIconStudio() {
            const grid = document.getElementById('svg-icons-grid');
            const allCards = STATIONS_DATA;

            grid.innerHTML = allCards.map((item, idx) => `
                <div class="bg-[#fdfaf3] border-[2.5px] border-[#5c3a31] rounded-2xl p-4 shadow-[0_6px_0_#5c3a31] hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between text-xs font-bold text-[#7c5243] mb-2">
                            <span class="bg-[#ede0c9] px-2.5 py-1 rounded-lg border border-[#5c3a31]/20">${item.code}</span>
                            <span class="text-amber-700">${String(idx + 1).padStart(2, '0')} / 05</span>
                        </div>
                        <div class="bg-gradient-to-b from-[#f5ead6] to-[#e9dac0] rounded-xl border-2 border-[#5c3a31]/20 p-2 my-2 flex items-center justify-center animate-float" style="animation-delay: ${idx * 0.25}s">
                            ${item.svgArt}
                        </div>
                        <h4 class="font-serif-oriental text-xl font-bold text-[#3d231c] mt-2">${item.fullName}</h4>
                        <p class="text-xs text-[#6e473b] mt-1 leading-relaxed">${item.subtitle}</p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-[#5c3a31]/15 flex items-center justify-between">
                        <span class="text-[11px] font-semibold text-[#7c5243]">Tag: &lt; ${item.label} &gt;</span>
                        ${item.position ? `
                        <button onclick="toggleIconStudioModal(false); focusStation('${item.id}')" class="bg-[#5c3a31] hover:bg-[#3d241d] text-[#fdfaf3] text-xs font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors">
                            <span>Khám phá</span>
                            <i class="ph-bold ph-arrow-up-right"></i>
                        </button>` : `
                        <span class="text-xs font-bold text-emerald-700">Đã dựng trên Map 3D</span>
                        `}
                    </div>
                </div>
            `).join('');
        }

        function toggleIconStudioModal(show) {
            const modal = document.getElementById('svg-studio-modal');
            if (show) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                openDialog(modal);
            } else {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                closeDialog();
            }
        }

        /*************************************************************************
         * PHẦN 2: DỰNG KHÔNG GIAN 3D ISOMETRIC DIORAMA & ANIMATION PEAK NHẤT (THREE.JS)
         *************************************************************************/
        let scene, camera, renderer, raycaster, mouse;
        let mapRootGroup;
        let stationMeshes = []; // Clickable 3D station groups
        let stationMap = {};    // id -> { group, labelEl, auraRing, data, baseScale }
        let steppingStones = [];
        let blossomPetalsSystem, firefliesSystem;
        let lanternPointLights = [];
        let waterMesh, celestialWheelGroup;
        let activeStationId = null;

        // Smooth Camera Orbit & Fly-to Target State
        const camState = {
            currentPos: new THREE.Vector3(0, 12.5, 14.5),
            targetPos: new THREE.Vector3(0, 12.5, 14.5),
            currentLookAt: new THREE.Vector3(0, 0.2, 0.5),
            targetLookAt: new THREE.Vector3(0, 0.2, 0.5),
            isDragging: false,
            prevMouse: { x: 0, y: 0 },
            orbitAngleX: 0,
            orbitAngleY: 0.72,
            orbitRadius: 18.2
        };

        // Ambient & Directional Lights for Atmosphere Switching
        let ambientLight, mainDirLight, rimLight, pondPointLight;

        function initThreeWorld() {
            const container = document.getElementById('canvas-container');

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xe6d7c3);
            scene.fog = new THREE.FogExp2(0xe6d7c3, 0.018);

            camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 120);
            camera.position.copy(camState.currentPos);
            camera.lookAt(camState.currentLookAt);

            renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            mapRootGroup = new THREE.Group();
            scene.add(mapRootGroup);

            setupLights();
            buildScrollTerrainAndFraming();
            buildSteppingStonePaths();
            buildAllStations3D();
            buildDecorativeEnvironment3D();
            buildParticleSystems();
            createFloatingHTMLRibbons();
            setupInteractionEvents(container);

            // Start main animation loop
            animateLoop();
        }

        function setupLights() {
            ambientLight = new THREE.AmbientLight(0xfff5e4, 0.78);
            scene.add(ambientLight);

            mainDirLight = new THREE.DirectionalLight(0xfff0d4, 1.15);
            mainDirLight.position.set(14, 24, 16);
            mainDirLight.castShadow = true;
            mainDirLight.shadow.mapSize.width = 2048;
            mainDirLight.shadow.mapSize.height = 2048;
            mainDirLight.shadow.camera.near = 2;
            mainDirLight.shadow.camera.far = 55;
            const d = 14;
            mainDirLight.shadow.camera.left = -d;
            mainDirLight.shadow.camera.right = d;
            mainDirLight.shadow.camera.top = d;
            mainDirLight.shadow.camera.bottom = -d;
            mainDirLight.shadow.bias = -0.0005;
            scene.add(mainDirLight);

            rimLight = new THREE.DirectionalLight(0x9be7ff, 0.45);
            rimLight.position.set(-15, 10, -12);
            scene.add(rimLight);

            pondPointLight = new THREE.PointLight(0x4deeea, 1.5, 7);
            pondPointLight.position.set(0.4, 0.8, 0.2);
            mapRootGroup.add(pondPointLight);
        }

        // 1. Build the Unfurling Oriental Parchment Scroll Base & Celestial Top Plaza
        function buildScrollTerrainAndFraming() {
            // Outer Wooden Desk / Table Board
            const deskGeo = new THREE.BoxGeometry(22, 0.5, 15.5);
            const deskMat = new THREE.MeshStandardMaterial({ color: 0x855846, roughness: 0.75 });
            const deskMesh = new THREE.Mesh(deskGeo, deskMat);
            deskMesh.position.set(0, -0.45, 0);
            deskMesh.receiveShadow = true;
            mapRootGroup.add(deskMesh);

            // Main Cream Parchment Scroll Canvas
            const scrollGeo = new THREE.BoxGeometry(16.8, 0.24, 11.2);
            const scrollMat = new THREE.MeshStandardMaterial({ color: 0xf7efe1, roughness: 0.85 });
            const scrollMesh = new THREE.Mesh(scrollGeo, scrollMat);
            scrollMesh.position.set(0, -0.1, 0);
            scrollMesh.receiveShadow = true;
            mapRootGroup.add(scrollMesh);

            // Subtle Decorative Contour Waves on the Parchment Map (like the reference image)
            const wavePositions = [
                { x: -1.5, z: 0.8, rx: 3.5, rz: 2.2, rot: 0.2, color: 0xefe3ce },
                { x: 2.5, z: -0.6, rx: 3.2, rz: 2.0, rot: -0.3, color: 0xefe3ce },
                { x: -3.2, z: -1.8, rx: 2.6, rz: 1.8, rot: 0.4, color: 0xe9dbc3 },
                { x: 3.0, z: 2.0, rx: 2.8, rz: 1.7, rot: -0.2, color: 0xe9dbc3 }
            ];
            wavePositions.forEach(w => {
                const cylGeo = new THREE.CylinderGeometry(w.rx, w.rx, 0.04, 32);
                const cylMat = new THREE.MeshStandardMaterial({ color: w.color, roughness: 0.9 });
                const m = new THREE.Mesh(cylGeo, cylMat);
                m.scale.set(1, 1, w.rz / w.rx);
                m.rotation.y = w.rot;
                m.position.set(w.x, 0.03, w.z);
                m.receiveShadow = true;
                mapRootGroup.add(m);
            });

            // Scroll Wooden Roller Bars on Left & Right Edges
            const rollerGeo = new THREE.CylinderGeometry(0.28, 0.28, 12.0, 24);
            const rollerMat = new THREE.MeshStandardMaterial({ color: 0x5c3a31, roughness: 0.5 });
            const goldCapGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.45, 20);
            const goldMat = new THREE.MeshStandardMaterial({ color: 0xd99b26, metalness: 0.5, roughness: 0.3 });

            [-8.45, 8.45].forEach(xPos => {
                const roller = new THREE.Mesh(rollerGeo, rollerMat);
                roller.rotation.x = Math.PI / 2;
                roller.position.set(xPos, 0.05, 0);
                roller.castShadow = true;
                mapRootGroup.add(roller);

                [-6.0, 6.0].forEach(zEnd => {
                    const cap = new THREE.Mesh(goldCapGeo, goldMat);
                    cap.rotation.x = Math.PI / 2;
                    cap.position.set(xPos, 0.05, zEnd);
                    mapRootGroup.add(cap);
                });
            });

            // Top Background Celestial Circular Altar (Matches top-center of reference image!)
            celestialWheelGroup = new THREE.Group();
            celestialWheelGroup.position.set(-0.4, -0.1, -6.5);

            const altarBase = new THREE.Mesh(
                new THREE.CylinderGeometry(3.6, 3.9, 0.45, 36),
                new THREE.MeshStandardMaterial({ color: 0xf4f7fb, roughness: 0.5 })
            );
            altarBase.receiveShadow = true;
            celestialWheelGroup.add(altarBase);

            const blueRing = new THREE.Mesh(
                new THREE.TorusGeometry(3.35, 0.16, 12, 48),
                new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.35 })
            );
            blueRing.rotation.x = Math.PI / 2;
            blueRing.position.y = 0.22;
            celestialWheelGroup.add(blueRing);

            const goldRing = new THREE.Mesh(
                new THREE.TorusGeometry(2.3, 0.1, 12, 40),
                goldMat
            );
            goldRing.rotation.x = Math.PI / 2;
            goldRing.position.y = 0.25;
            celestialWheelGroup.add(goldRing);

            // Golden cubes around celestial wheel
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const cube = new THREE.Mesh(
                    new THREE.BoxGeometry(0.45, 0.45, 0.45),
                    goldMat
                );
                cube.position.set(Math.cos(angle) * 2.9, 0.4, Math.sin(angle) * 2.9);
                cube.rotation.y = angle;
                celestialWheelGroup.add(cube);
            }

            // Center pedestal on celestial wheel
            const pedestal = new THREE.Mesh(
                new THREE.CylinderGeometry(0.9, 1.15, 0.9, 20),
                new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.4 })
            );
            pedestal.position.y = 0.55;
            celestialWheelGroup.add(pedestal);

            mapRootGroup.add(celestialWheelGroup);
        }

        // 2. Build Curved Dotted Stepping Stone Paths Connecting Stations
        function buildSteppingStonePaths() {
            const pathPairs = [
                // Visual -> Graphic
                [new THREE.Vector3(-4.2, 0.08, -2.5), new THREE.Vector3(-4.8, 0.08, 0.0), new THREE.Vector3(-3.8, 0.08, 2.2)],
                // Graphic -> Central UX/UI
                [new THREE.Vector3(-3.6, 0.08, 2.2), new THREE.Vector3(-1.8, 0.08, 1.5), new THREE.Vector3(0.2, 0.08, 0.4)],
                // Central UX/UI -> System
                [new THREE.Vector3(0.6, 0.08, 0.0), new THREE.Vector3(2.6, 0.08, -1.6), new THREE.Vector3(4.5, 0.08, -2.9)],
                // Central UX/UI -> Contact
                [new THREE.Vector3(0.6, 0.08, 0.5), new THREE.Vector3(2.2, 0.08, 2.1), new THREE.Vector3(4.1, 0.08, 2.5)],
                // Graphic -> Bottom Portfolio Entrance
                [new THREE.Vector3(-3.8, 0.08, 2.4), new THREE.Vector3(-2.4, 0.08, 3.6), new THREE.Vector3(-0.6, 0.08, 3.4)]
            ];

            const stoneGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.07, 8);
            pathPairs.forEach((pts, curveIdx) => {
                const curve = new THREE.QuadraticBezierCurve3(pts[0], pts[1], pts[2]);
                const numStones = 16;
                for (let i = 1; i < numStones; i++) {
                    const t = i / numStones;
                    const pos = curve.getPoint(t);
                    const stoneMat = new THREE.MeshStandardMaterial({
                        color: 0xd9cbb8,
                        emissive: 0xf59e0b,
                        emissiveIntensity: 0.05,
                        roughness: 0.7
                    });
                    const stone = new THREE.Mesh(stoneGeo, stoneMat);
                    stone.position.copy(pos);
                    stone.rotation.y = (i * 0.7);
                    stone.receiveShadow = true;
                    mapRootGroup.add(stone);
                    steppingStones.push({ mesh: stone, phase: i * 0.35 + curveIdx });
                }
            });
        }

        // Helper: Create Oriental Pagoda Tiered Roof with Upturned Eaves
        function createPagodaRoof(radius, height, colorHex, rimColorHex = 0x5c3a31) {
            const roofGroup = new THREE.Group();
            const coneGeo = new THREE.ConeGeometry(radius, height, 6);
            const coneMat = new THREE.MeshStandardMaterial({
                color: colorHex,
                roughness: 0.45,
                metalness: 0.1
            });
            const cone = new THREE.Mesh(coneGeo, coneMat);
            cone.castShadow = true;
            cone.receiveShadow = true;
            roofGroup.add(cone);

            // Eave trim ring
            const eaveGeo = new THREE.CylinderGeometry(radius * 1.04, radius * 1.08, height * 0.16, 6);
            const eaveMat = new THREE.MeshStandardMaterial({ color: rimColorHex, roughness: 0.6 });
            const eave = new THREE.Mesh(eaveGeo, eaveMat);
            eave.position.y = -height * 0.42;
            roofGroup.add(eave);

            return roofGroup;
        }

        // Helper: Create White Layered Blossom Pagoda Tree (Iconic pink-white layered trees in reference image)
        function createWhiteBlossomPagodaTree(scale = 1) {
            const tree = new THREE.Group();
            const trunk = new THREE.Mesh(
                new THREE.CylinderGeometry(0.08 * scale, 0.13 * scale, 0.9 * scale, 8),
                new THREE.MeshStandardMaterial({ color: 0x5c3a31, roughness: 0.8 })
            );
            trunk.position.y = 0.45 * scale;
            trunk.castShadow = true;
            tree.add(trunk);

            const tiers = [
                { y: 0.45, r: 0.48, h: 0.24, c: 0xfad2cf },
                { y: 0.68, r: 0.40, h: 0.22, c: 0xfce4e1 },
                { y: 0.89, r: 0.31, h: 0.20, c: 0xfff3f2 },
                { y: 1.07, r: 0.21, h: 0.18, c: 0xffffff }
            ];

            tiers.forEach(t => {
                const tierMesh = new THREE.Mesh(
                    new THREE.ConeGeometry(t.r * scale, t.h * scale, 10),
                    new THREE.MeshStandardMaterial({ color: t.c, roughness: 0.65 })
                );
                tierMesh.position.y = t.y * scale;
                tierMesh.castShadow = true;
                tree.add(tierMesh);
            });

            return tree;
        }

        // 3. Build All 5 Main Interactive 3D Stations
        function buildAllStations3D() {
            STATIONS_DATA.forEach(station => {
                const group = new THREE.Group();
                group.position.set(station.position.x, station.position.y, station.position.z);
                group.userData = { stationId: station.id, stationData: station };

                // Interactive Ground Aura Ring
                const auraGeo = new THREE.RingGeometry(1.45, 1.68, 36);
                const auraMat = new THREE.MeshBasicMaterial({
                    color: station.accentColor,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.0
                });
                const auraRing = new THREE.Mesh(auraGeo, auraMat);
                auraRing.rotation.x = Math.PI / 2;
                auraRing.position.y = -station.position.y + 0.06;
                group.add(auraRing);

                // Invisible Hitbox for Easy Clicking/Hovering
                const hitGeo = new THREE.CylinderGeometry(1.5, 1.5, 3.2, 12);
                const hitMat = new THREE.MeshBasicMaterial({ visible: false });
                const hitMesh = new THREE.Mesh(hitGeo, hitMat);
                hitMesh.position.y = 1.2;
                hitMesh.userData = { stationId: station.id };
                group.add(hitMesh);
                stationMeshes.push(hitMesh);

                // Build Unique Architectural Geometry per Station
                if (station.id === 'uxui') {
                    buildCentralUxUiPagoda(group);
                } else if (station.id === 'visual') {
                    buildVisualJadePavilion(group);
                } else if (station.id === 'system') {
                    buildSystemDarkSanctuary(group);
                } else if (station.id === 'graphic') {
                    buildGraphicWorkshopCart(group);
                } else if (station.id === 'contact') {
                    buildContactPersimmonShrine(group);
                }

                mapRootGroup.add(group);
                stationMap[station.id] = {
                    group,
                    auraRing,
                    data: station,
                    targetScale: 1.0
                };
            });
        }

        // Station 1: Central UX/UI Grand Pagoda with Glowing Pond & Wisteria
        function buildCentralUxUiPagoda(group) {
            // Hexagonal Stone Base
            const base = new THREE.Mesh(
                new THREE.CylinderGeometry(1.55, 1.7, 0.28, 6),
                new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.6 })
            );
            base.position.y = -0.1;
            base.receiveShadow = true;
            group.add(base);

            // Glowing Spirit Water Pond Inside
            const pondGeo = new THREE.CylinderGeometry(1.18, 1.18, 0.12, 24);
            const pondMat = new THREE.MeshStandardMaterial({
                color: 0x38bdf8,
                emissive: 0x0ea5e9,
                emissiveIntensity: 0.55,
                roughness: 0.15,
                metalness: 0.2
            });
            waterMesh = new THREE.Mesh(pondGeo, pondMat);
            waterMesh.position.y = 0.02;
            group.add(waterMesh);

            // 6 Wooden Pillars
            const pillarGeo = new THREE.CylinderGeometry(0.09, 0.1, 1.45, 10);
            const pillarMat = new THREE.MeshStandardMaterial({ color: 0x6b4235, roughness: 0.7 });
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                const p = new THREE.Mesh(pillarGeo, pillarMat);
                p.position.set(Math.cos(angle) * 1.15, 0.75, Math.sin(angle) * 1.15);
                p.castShadow = true;
                group.add(p);
            }

            // Tier 1 Roof (Dark Blue-Slate)
            const roof1 = createPagodaRoof(1.75, 0.85, 0x334155, 0x1e293b);
            roof1.position.y = 1.65;
            group.add(roof1);

            // Tier 2 Roof
            const roof2 = createPagodaRoof(1.28, 0.78, 0x475569, 0x1e293b);
            roof2.position.y = 2.35;
            group.add(roof2);

            // Spire Finial
            const spire = new THREE.Mesh(
                new THREE.ConeGeometry(0.25, 0.75, 8),
                new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.4, roughness: 0.3 })
            );
            spire.position.y = 2.95;
            group.add(spire);

            // Green Vines & Wisteria Blossoms on Roof
            const vineMat = new THREE.MeshStandardMaterial({ color: 0x65a30d, roughness: 0.6 });
            const wisteriaMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.3 });
            for (let i = 0; i < 5; i++) {
                const v = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), vineMat);
                v.position.set(-0.7 + i * 0.22, 2.05 - i * 0.08, 0.65);
                group.add(v);
                if (i % 2 === 0) {
                    const w = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), wisteriaMat);
                    w.position.set(-0.75 + i * 0.2, 1.85 - i * 0.08, 0.78);
                    group.add(w);
                }
            }

            // Surrounding White Blossom Mini Trees (matches center cluster in reference image)
            [
                [-1.65, -0.2, 0.3, 0.85],
                [-1.4, -0.2, 0.95, 0.72],
                [1.55, -0.2, 0.25, 0.85],
                [1.35, -0.2, 0.95, 0.75]
            ].forEach(([tx, ty, tz, sc]) => {
                const miniTree = createWhiteBlossomPagodaTree(sc);
                miniTree.position.set(tx, ty, tz);
                group.add(miniTree);
            });
        }

        // Station 2: Visual Jade Pavilion on Mossy Waterfall Cliff
        function buildVisualJadePavilion(group) {
            // Rocky Cliff & Lush Green Moss Base
            const cliff = new THREE.Mesh(
                new THREE.DodecahedronGeometry(1.35, 1),
                new THREE.MeshStandardMaterial({ color: 0x78867a, roughness: 0.85, flatShading: true })
            );
            cliff.scale.set(1.15, 0.55, 1.05);
            cliff.position.y = -0.35;
            cliff.castShadow = true;
            cliff.receiveShadow = true;
            group.add(cliff);

            const mossCap = new THREE.Mesh(
                new THREE.CylinderGeometry(1.35, 1.45, 0.24, 12),
                new THREE.MeshStandardMaterial({ color: 0x7cb342, roughness: 0.75 })
            );
            mossCap.position.y = -0.05;
            group.add(mossCap);

            // Glowing Waterfall Cascade
            const waterfall = new THREE.Mesh(
                new THREE.BoxGeometry(0.55, 0.85, 0.9),
                new THREE.MeshStandardMaterial({
                    color: 0x67e8f9,
                    emissive: 0x22d3ee,
                    emissiveIntensity: 0.45,
                    roughness: 0.2
                })
            );
            waterfall.position.set(-0.25, -0.32, 0.62);
            waterfall.rotation.x = 0.35;
            group.add(waterfall);

            // Red Pillars
            const pGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.15, 8);
            const pMat = new THREE.MeshStandardMaterial({ color: 0xd94832, roughness: 0.5 });
            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2;
                const p = new THREE.Mesh(pGeo, pMat);
                p.position.set(Math.cos(a) * 0.85, 0.55, Math.sin(a) * 0.85);
                p.castShadow = true;
                group.add(p);
            }

            // Jade Green Double Tiered Roofs
            const r1 = createPagodaRoof(1.42, 0.72, 0x16805c, 0x0f523b);
            r1.position.y = 1.25;
            group.add(r1);

            const r2 = createPagodaRoof(1.02, 0.65, 0x22a075, 0x0f523b);
            r2.position.y = 1.82;
            group.add(r2);

            // Hanging Warm Lanterns
            const lanternMat = new THREE.MeshStandardMaterial({
                color: 0xffedd5,
                emissive: 0xf97316,
                emissiveIntensity: 0.9
            });
            [-0.95, 0.95].forEach(lx => {
                const l = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 10), lanternMat);
                l.position.set(lx, 0.95, 0.55);
                group.add(l);
            });
        }

        // Station 3: System & Backend Dark Sanctuary Pavilion
        function buildSystemDarkSanctuary(group) {
            // Cream Stone Platform
            const base = new THREE.Mesh(
                new THREE.CylinderGeometry(1.38, 1.5, 0.32, 16),
                new THREE.MeshStandardMaterial({ color: 0xf1e4d1, roughness: 0.65 })
            );
            base.position.y = -0.25;
            base.receiveShadow = true;
            group.add(base);

            // Tall Red Lacquer Columns
            const colGeo = new THREE.CylinderGeometry(0.085, 0.095, 1.4, 10);
            const colMat = new THREE.MeshStandardMaterial({ color: 0xc8372d, roughness: 0.45 });
            for (let i = 0; i < 6; i++) {
                const a = (i / 6) * Math.PI * 2;
                const col = new THREE.Mesh(colGeo, colMat);
                col.position.set(Math.cos(a) * 0.95, 0.55, Math.sin(a) * 0.95);
                col.castShadow = true;
                group.add(col);
            }

            // Glowing Core Inside Sanctuary
            const core = new THREE.Mesh(
                new THREE.OctahedronGeometry(0.32, 0),
                new THREE.MeshStandardMaterial({
                    color: 0xfef08a,
                    emissive: 0xef4444,
                    emissiveIntensity: 0.85
                })
            );
            core.position.y = 0.55;
            group.add(core);

            // Obsidian Black & Crimson Roofs
            const r1 = createPagodaRoof(1.5, 0.78, 0x222128, 0x991b1b);
            r1.position.y = 1.42;
            group.add(r1);

            const r2 = createPagodaRoof(1.06, 0.65, 0x2e2d36, 0x991b1b);
            r2.position.y = 2.02;
            group.add(r2);
        }

        // Station 4: Graphic / Projects Artisan Workshop Cart & Lantern Trees
        function buildGraphicWorkshopCart(group) {
            // Artisan Wooden Cart Body
            const body = new THREE.Mesh(
                new THREE.BoxGeometry(1.45, 0.85, 1.05),
                new THREE.MeshStandardMaterial({ color: 0x6e4736, roughness: 0.7 })
            );
            body.position.set(0.35, 0.48, 0.1);
            body.castShadow = true;
            group.add(body);

            // Warm Lit Workshop Interior Window
            const windowGlow = new THREE.Mesh(
                new THREE.BoxGeometry(1.15, 0.48, 1.08),
                new THREE.MeshStandardMaterial({
                    color: 0xfef3c7,
                    emissive: 0xf59e0b,
                    emissiveIntensity: 0.75
                })
            );
            windowGlow.position.set(0.35, 0.52, 0.1);
            group.add(windowGlow);

            // Pitched Timber Roof
            const roofGeo = new THREE.ConeGeometry(1.22, 0.68, 4);
            const roofMat = new THREE.MeshStandardMaterial({ color: 0x543426, roughness: 0.65 });
            const roof = new THREE.Mesh(roofGeo, roofMat);
            roof.position.set(0.35, 1.2, 0.1);
            roof.rotation.y = Math.PI / 4;
            roof.castShadow = true;
            group.add(roof);

            // 4 Wooden Wagon Wheels
            const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.12, 16);
            const wheelMat = new THREE.MeshStandardMaterial({ color: 0x3b2319, roughness: 0.8 });
            [
                [-0.08, 0.1, 0.65],
                [0.78, 0.1, 0.65],
                [-0.08, 0.1, -0.45],
                [0.78, 0.1, -0.45]
            ].forEach(([wx, wy, wz]) => {
                const w = new THREE.Mesh(wheelGeo, wheelMat);
                w.rotation.x = Math.PI / 2;
                w.position.set(wx, wy, wz);
                group.add(w);
            });

            // Cluster of White Blossom Pagoda Trees Next to Cart
            [
                [-1.05, -0.1, -0.2, 0.95],
                [-1.45, -0.1, 0.45, 0.8],
                [-0.75, -0.1, 0.65, 0.75]
            ].forEach(([tx, ty, tz, sc]) => {
                const t = createWhiteBlossomPagodaTree(sc);
                t.position.set(tx, ty, tz);
                group.add(t);
            });
        }

        // Station 5: Contact Persimmon/Golden Orange Tree Shrine & Messenger Cabin
        function buildContactPersimmonShrine(group) {
            // Stone Ring Platform
            const stoneBase = new THREE.Mesh(
                new THREE.CylinderGeometry(1.25, 1.38, 0.22, 20),
                new THREE.MeshStandardMaterial({ color: 0xe7dfd3, roughness: 0.75 })
            );
            stoneBase.position.set(0.25, -0.05, 0);
            stoneBase.receiveShadow = true;
            group.add(stoneBase);

            // Lush Persimmon Tree Trunk
            const trunk = new THREE.Mesh(
                new THREE.CylinderGeometry(0.18, 0.28, 1.55, 10),
                new THREE.MeshStandardMaterial({ color: 0x5c3a2e, roughness: 0.85 })
            );
            trunk.position.set(0.35, 0.75, -0.1);
            trunk.castShadow = true;
            group.add(trunk);

            // Lush Green Foliage Clusters
            const foliageMat = new THREE.MeshStandardMaterial({ color: 0x4d8b31, roughness: 0.65 });
            const foliagePositions = [
                [0.35, 1.75, -0.1, 0.85],
                [-0.15, 1.48, 0.2, 0.65],
                [0.85, 1.52, 0.15, 0.68],
                [0.35, 1.55, -0.55, 0.62],
                [0.2, 2.15, 0.0, 0.6]
            ];
            foliagePositions.forEach(([fx, fy, fz, r]) => {
                const f = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 14), foliageMat);
                f.position.set(fx, fy, fz);
                f.castShadow = true;
                group.add(f);
            });

            // Glowing Golden Persimmons / Oranges
            const orangeMat = new THREE.MeshStandardMaterial({
                color: 0xff7b1c,
                emissive: 0xf97316,
                emissiveIntensity: 0.35,
                roughness: 0.3
            });
            const fruitCoords = [
                [-0.35, 1.55, 0.62], [0.15, 1.85, 0.68], [0.68, 1.65, 0.62],
                [1.05, 1.52, 0.28], [-0.45, 1.35, 0.1], [0.35, 2.35, 0.32],
                [0.82, 1.95, -0.15], [-0.15, 2.05, -0.25]
            ];
            fruitCoords.forEach(([ox, oy, oz]) => {
                const fruit = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 10), orangeMat);
                fruit.position.set(ox, oy, oz);
                group.add(fruit);
            });

            // Cozy Messenger Cabin next to the tree
            const cabin = new THREE.Mesh(
                new THREE.BoxGeometry(0.95, 0.78, 0.85),
                new THREE.MeshStandardMaterial({ color: 0x784937, roughness: 0.75 })
            );
            cabin.position.set(-1.15, 0.28, 0.65);
            cabin.rotation.y = 0.35;
            cabin.castShadow = true;
            group.add(cabin);

            const cabinRoof = new THREE.Mesh(
                new THREE.ConeGeometry(0.82, 0.58, 4),
                new THREE.MeshStandardMaterial({ color: 0xe5a93c, roughness: 0.55 })
            );
            cabinRoof.position.set(-1.15, 0.92, 0.65);
            cabinRoof.rotation.y = Math.PI / 4 + 0.35;
            cabinRoof.castShadow = true;
            group.add(cabinRoof);
        }

        // 4. Build Surrounding Decorative Mountains, Foreground Cottage & Blossom Trees
        function buildDecorativeEnvironment3D() {
            // Oriental Stylised Mountain Peaks (karst peaks like reference image)
            const mountainSpecs = [
                { x: -6.8, z: 0.8, r: 1.35, h: 3.4, c: 0xb9aa7e },
                { x: -6.1, z: 2.1, r: 1.05, h: 2.6, c: 0xc7b98e },
                { x: -7.2, z: 2.6, r: 0.95, h: 2.2, c: 0xa8996e },
                { x: -0.6, z: -2.4, r: 0.85, h: 2.8, c: 0x9e8f68 },
                { x: 5.5, z: -4.2, r: 1.25, h: 3.5, c: 0xa8996e },
                { x: 6.4, z: 1.4, r: 1.1, h: 2.7, c: 0x9e8f68 }
            ];

            mountainSpecs.forEach(m => {
                const mGeo = new THREE.ConeGeometry(m.r, m.h, 5);
                const mMat = new THREE.MeshStandardMaterial({
                    color: m.c,
                    roughness: 0.85,
                    flatShading: true
                });
                const peak = new THREE.Mesh(mGeo, mMat);
                peak.position.set(m.x, m.h / 2 - 0.05, m.z);
                peak.rotation.y = Math.random() * Math.PI;
                peak.castShadow = true;
                peak.receiveShadow = true;
                mapRootGroup.add(peak);
            });

            // Bottom-Left Golden Roof Cottage (Matches bottom-left house in reference image!)
            const cottageGroup = new THREE.Group();
            cottageGroup.position.set(-6.1, 0.0, 4.1);
            cottageGroup.rotation.y = 0.45;

            const cBody = new THREE.Mesh(
                new THREE.BoxGeometry(1.75, 1.15, 1.35),
                new THREE.MeshStandardMaterial({ color: 0x6e4435, roughness: 0.75 })
            );
            cBody.position.y = 0.58;
            cBody.castShadow = true;
            cottageGroup.add(cBody);

            const cRoof = new THREE.Mesh(
                new THREE.ConeGeometry(1.55, 0.95, 4),
                new THREE.MeshStandardMaterial({ color: 0xf4bd4f, roughness: 0.55 })
            );
            cRoof.position.y = 1.58;
            cRoof.rotation.y = Math.PI / 4;
            cRoof.castShadow = true;
            cottageGroup.add(cRoof);
            mapRootGroup.add(cottageGroup);

            // Large Left Cherry/Lotus Blossom Tree
            const bigTree = new THREE.Group();
            bigTree.position.set(-6.5, 0, -2.2);
            const btTrunk = new THREE.Mesh(
                new THREE.CylinderGeometry(0.28, 0.45, 2.8, 10),
                new THREE.MeshStandardMaterial({ color: 0x5c3a31, roughness: 0.85 })
            );
            btTrunk.position.y = 1.4;
            btTrunk.castShadow = true;
            bigTree.add(btTrunk);

            const blossomColors = [0xfadcd9, 0xf7b5ae, 0x73a35d];
            [
                [0, 3.1, 0, 1.25, 0],
                [-0.85, 2.6, 0.5, 0.95, 1],
                [0.85, 2.7, 0.4, 0.9, 0],
                [0, 2.5, -0.7, 0.95, 2]
            ].forEach(([bx, by, bz, br, ci]) => {
                const b = new THREE.Mesh(
                    new THREE.SphereGeometry(br, 12, 12),
                    new THREE.MeshStandardMaterial({ color: blossomColors[ci], roughness: 0.7 })
                );
                b.position.set(bx, by, bz);
                b.castShadow = true;
                bigTree.add(b);
            });
            mapRootGroup.add(bigTree);

            // Extra Cluster of White Blossom Trees near Bottom Plaque (matches reference image)
            [
                [-1.3, 0, 3.3, 0.9],
                [-0.75, 0, 3.6, 0.78],
                [-1.55, 0, 3.85, 0.72]
            ].forEach(([tx, ty, tz, sc]) => {
                const wt = createWhiteBlossomPagodaTree(sc);
                wt.position.set(tx, ty, tz);
                mapRootGroup.add(wt);
            });
        }

        // 5. Build Falling Cherry Blossom Petals & Golden Fireflies Particle Systems
        function buildParticleSystems() {
            // Falling Pink Blossom Petals
            const petalCount = 220;
            const petalGeo = new THREE.BufferGeometry();
            const positions = new Float32Array(petalCount * 3);
            const velocities = [];

            for (let i = 0; i < petalCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 20;
                positions[i * 3 + 1] = Math.random() * 10 + 0.5;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
                velocities.push({
                    vx: (Math.random() - 0.3) * 0.015,
                    vy: -(Math.random() * 0.018 + 0.01),
                    vz: (Math.random() - 0.5) * 0.015,
                    sway: Math.random() * Math.PI * 2
                });
            }

            petalGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const petalMat = new THREE.PointsMaterial({
                color: 0xfbb6ce,
                size: 0.22,
                transparent: true,
                opacity: 0.88
            });

            blossomPetalsSystem = new THREE.Points(petalGeo, petalMat);
            blossomPetalsSystem.userData = { velocities };
            scene.add(blossomPetalsSystem);

            // Floating Golden Spirit Fireflies
            const fireflyCount = 90;
            const fireflyGeo = new THREE.BufferGeometry();
            const fPos = new Float32Array(fireflyCount * 3);
            for (let i = 0; i < fireflyCount; i++) {
                fPos[i * 3] = (Math.random() - 0.5) * 16;
                fPos[i * 3 + 1] = Math.random() * 4.5 + 0.3;
                fPos[i * 3 + 2] = (Math.random() - 0.5) * 11;
            }
            fireflyGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
            const fireflyMat = new THREE.PointsMaterial({
                color: 0xfde047,
                size: 0.16,
                transparent: true,
                opacity: 0.75
            });
            firefliesSystem = new THREE.Points(fireflyGeo, fireflyMat);
            scene.add(firefliesSystem);
        }

        // 6. Create Floating HTML Ribbon Banners (< Visual >, < UX/UI >, etc.) Linked to 3D Coordinates
        function createFloatingHTMLRibbons() {
            const layer = document.getElementById('labels-layer');
            layer.innerHTML = '';

            STATIONS_DATA.forEach(station => {
                const el = document.createElement('button');
                el.type = 'button';
                el.setAttribute('aria-label', station.fullName);
                el.className = 'station-label';
                el.id = `label-${station.id}`;
                el.innerHTML = `
                    <div class="ribbon-pill" id="pill-${station.id}">
                        <span class="ribbon-arrow left">&lt;</span>
                        <span class="font-serif-oriental font-bold text-base md:text-lg text-[#3d231c] tracking-wide">${station.label}</span>
                        <span class="ribbon-arrow right">&gt;</span>
                    </div>
                    <div class="ribbon-pointer"></div>
                `;
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    focusStation(station.id);
                });
                el.addEventListener('mouseenter', () => {
                    if (stationMap[station.id]) {
                        stationMap[station.id].targetScale = 1.12;
                        stationMap[station.id].auraRing.material.opacity = 0.65;
                    }
                });
                el.addEventListener('mouseleave', () => {
                    if (stationMap[station.id] && activeStationId !== station.id) {
                        stationMap[station.id].targetScale = 1.0;
                        stationMap[station.id].auraRing.material.opacity = 0.0;
                    }
                });

                layer.appendChild(el);
                stationMap[station.id].labelEl = el;
            });
        }

        // Project 3D Station Top Positions to 2D Screen Pixels Every Frame
        function updateFloatingLabelsPosition() {
            const widthHalf = window.innerWidth / 2;
            const heightHalf = window.innerHeight / 2;

            STATIONS_DATA.forEach(station => {
                const entry = stationMap[station.id];
                if (!entry || !entry.labelEl) return;

                const worldPos = new THREE.Vector3();
                entry.group.getWorldPosition(worldPos);
                worldPos.y += (station.id === 'uxui' ? 3.25 : 2.55);

                worldPos.project(camera);

                const x = (worldPos.x * widthHalf) + widthHalf;
                const y = -(worldPos.y * heightHalf) + heightHalf;

                entry.labelEl.style.left = `${x}px`;
                entry.labelEl.style.top = `${y}px`;
            });
        }

        // 7. Interactive Camera Fly-to & Station Detail Drawer
        function focusStation(stationId) {
            const entry = stationMap[stationId];
            if (!entry) {
                const station = STATIONS_DATA.find(item => item.id === stationId);
                if (station) {
                    activeStationId = stationId;
                    populateAndOpenDetailDrawer(station);
                }
                return;
            }

            activeStationId = stationId;
            const st = entry.data;

            // Highlight active ribbon pill & ground ring
            Object.keys(stationMap).forEach(id => {
                const pill = document.getElementById(`pill-${id}`);
                if (id === stationId) {
                    pill.classList.add('active');
                    stationMap[id].auraRing.material.opacity = 0.85;
                    stationMap[id].targetScale = 1.12;
                } else {
                    pill.classList.remove('active');
                    stationMap[id].auraRing.material.opacity = 0.0;
                    stationMap[id].targetScale = 1.0;
                }
            });

            // Smooth Fly-To Camera Offset (shifted slightly so right modal doesn't cover building)
            camState.targetPos.set(st.camOffset.x, st.camOffset.y, st.camOffset.z);
            camState.targetLookAt.set(st.position.x + 1.1, st.position.y + 0.8, st.position.z);

            populateAndOpenDetailDrawer(st);
        }

        function populateAndOpenDetailDrawer(st) {
            const modal = document.getElementById('station-detail-modal');
            document.getElementById('detail-badge').textContent = st.code;
            document.getElementById('detail-title').textContent = st.fullName;

            const body = document.getElementById('detail-body');
            body.innerHTML = `
                <!-- Illustrated 2D SVG Blueprint Header -->
                <div class="bg-gradient-to-br from-[#f4e8d1] to-[#e7d4b5] border-2 border-[#5c3a31]/25 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
                    <div class="w-32 h-32 shrink-0 bg-[#fdfaf3] rounded-xl border border-[#5c3a31]/20 p-1 flex items-center justify-center shadow-inner">
                        ${st.svgArt}
                    </div>
                    <div class="space-y-1.5">
                        <span class="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-2.5 py-0.5 rounded-md">
                            <i class="ph-fill ph-seal-check"></i> Justin Developer · Portfolio
                        </span>
                        <h3 class="font-serif-oriental text-xl font-bold text-[#3d231c]">${st.fullName}</h3>
                        <p class="text-xs text-[#6b483d] leading-relaxed">${st.subtitle}</p>
                    </div>
                </div>

                <!-- Key Metrics -->
                <div class="grid grid-cols-3 gap-2.5">
                    ${st.metrics.map(m => `
                        <div class="bg-[#fdfaf3] border-2 border-[#5c3a31]/20 rounded-xl p-3 text-center">
                            <div class="font-serif-oriental text-xl font-bold text-[#5c3a31]">${m.value}</div>
                            <div class="text-[11px] font-semibold text-[#7c5243]">${m.label}</div>
                        </div>
                    `).join('')}
                </div>

                <!-- Tech Stack Badges -->
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-[#7c5243] mb-2.5 flex items-center gap-1.5">
                        <i class="ph-fill ph-code text-amber-700"></i> Công Nghệ & Kỹ Năng Trọng Tâm
                    </h4>
                    <div class="flex flex-wrap gap-2">
                        ${st.skills.map(skill => `
                            <span class="px-3 py-1.5 rounded-xl bg-[#ede0c9] border border-[#5c3a31]/30 text-xs font-bold text-[#4a2e26]">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Featured Projects -->
                <div class="space-y-3">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-[#7c5243] flex items-center gap-1.5">
                        <i class="ph-fill ph-shooting-star text-amber-700"></i> ${st.id === 'uxui' ? 'Đôi nét về tôi' : st.id === 'contact' ? 'Giữ kết nối' : 'Dự án & Sản phẩm'}
                    </h4>
                    ${st.projects.map(p => `
                        <div class="bg-[#fdfaf3] border-2 border-[#5c3a31]/30 rounded-2xl p-4 space-y-2 hover:border-[#5c3a31] transition-colors">
                            <div class="flex items-center justify-between">
                                <h5 class="font-bold text-sm text-[#3d231c]">${p.title}</h5>
                                <span class="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">${p.role}</span>
                            </div>
                            <p class="text-xs text-[#6b483d] leading-relaxed">${p.desc}</p>
                            <div class="flex flex-wrap gap-1.5 pt-1">
                                ${p.tags.map(t => `<span class="text-[10px] font-bold px-2 py-0.5 rounded bg-[#ede0c9] text-[#5c3a31]">#${t}</span>`).join('')}
                            </div>
                            ${p.url ? `<a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.url.includes('github.com') ? 'Xem trên GitHub' : 'Mở website'} <span aria-hidden="true">↗</span></a>` : ''}
                        </div>
                    `).join('')}
                </div>

            `;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            body.scrollTop = 0;
            document.body.classList.add('detail-open');
            openDialog(modal);
        }

        function closeStationDetail() {
            resetCameraView();
        }

        function resetCameraView() {
            activeStationId = null;
            camState.targetPos.set(0, 12.5, 14.5);
            camState.targetLookAt.set(0, 0.2, 0.5);

            Object.keys(stationMap).forEach(id => {
                const pill = document.getElementById(`pill-${id}`);
                if (pill) pill.classList.remove('active');
                stationMap[id].auraRing.material.opacity = 0.0;
                stationMap[id].targetScale = 1.0;
            });

            const modal = document.getElementById('station-detail-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.classList.remove('detail-open');
            if (activeDialog === modal) closeDialog();
        }

        function navigateStation(direction) {
            const idx = STATIONS_DATA.findIndex(s => s.id === activeStationId);
            const nextIdx = (idx + direction + STATIONS_DATA.length) % STATIONS_DATA.length;
            focusStation(STATIONS_DATA[nextIdx].id);
        }

        function openPortfolioOverview() {
            focusStation('uxui');
        }

        let activeDialog = null;
        let returnFocus = null;
        function openDialog(modal) {
            if (!activeDialog) returnFocus = document.activeElement;
            activeDialog = modal;
            modal.querySelector('button').focus();
            document.querySelectorAll('header, footer, #labels-layer, #canvas-container').forEach(element => { element.inert = true; });
        }

        function closeDialog() {
            activeDialog = null;
            document.querySelectorAll('header, footer, #labels-layer, #canvas-container').forEach(element => { element.inert = false; });
            returnFocus?.focus();
        }

        document.addEventListener('keydown', event => {
            if (!activeDialog) return;
            if (event.key === 'Escape') {
                if (activeDialog.id === 'svg-studio-modal') toggleIconStudioModal(false);
                else closeStationDetail();
            }
            if (event.key === 'Tab') {
                const focusable = [...activeDialog.querySelectorAll('button, a[href]')];
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            }
        });

        function fitCameraToViewport() {
            camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(Math.PI / 10) / Math.min(1, camera.aspect / 1.35)));
            camera.updateProjectionMatrix();
        }

        // 8. Atmosphere & Lighting Mode Switcher (Day / Golden Sunset / Night Spirit)
        function setAtmosphere(mode) {
            ['day', 'sunset', 'night'].forEach(m => {
                const btn = document.getElementById(`env-${m}`);
                if (m === mode) {
                    btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-[#5c3a31] text-[#fdfaf3] flex items-center gap-1.5';
                } else {
                    btn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-[#5c3a31] hover:bg-[#5c3a31]/10 flex items-center gap-1.5';
                }
            });

            if (!ambientLight) return;
            if (mode === 'day') {
                scene.background.setHex(0xe6d7c3);
                scene.fog.color.setHex(0xe6d7c3);
                ambientLight.color.setHex(0xfff5e4);
                ambientLight.intensity = 0.78;
                mainDirLight.color.setHex(0xfff0d4);
                mainDirLight.intensity = 1.15;
                pondPointLight.intensity = 1.4;
            } else if (mode === 'sunset') {
                scene.background.setHex(0xd99b78);
                scene.fog.color.setHex(0xd99b78);
                ambientLight.color.setHex(0xffb085);
                ambientLight.intensity = 0.68;
                mainDirLight.color.setHex(0xff7b38);
                mainDirLight.intensity = 1.35;
                pondPointLight.intensity = 2.0;
            } else if (mode === 'night') {
                scene.background.setHex(0x161b2e);
                scene.fog.color.setHex(0x161b2e);
                ambientLight.color.setHex(0x4b639e);
                ambientLight.intensity = 0.52;
                mainDirLight.color.setHex(0x8da8ff);
                mainDirLight.intensity = 0.65;
                pondPointLight.intensity = 3.2;
            }
        }

        // 9. Mouse / Touch Orbit, Zoom & Raycasting Events
        function setupInteractionEvents(container) {
            container.addEventListener('pointerdown', (e) => {
                if (e.button !== 0 || camState.isDragging) return;
                camState.isDragging = true;
                camState.pointerId = e.pointerId;
                camState.pointerStart = { x: e.clientX, y: e.clientY };
                camState.dragMoved = false;
                container.setPointerCapture(e.pointerId);
                camState.prevMouse.x = e.clientX;
                camState.prevMouse.y = e.clientY;
            });

            window.addEventListener('pointermove', (e) => {
                // Raycast hover check when not dragging
                mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

                if (!camState.isDragging) {
                    if (!container.contains(e.target)) return;
                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObjects(stationMeshes, false);
                    Object.keys(stationMap).forEach(id => {
                        if (id !== activeStationId) {
                            stationMap[id].targetScale = 1.0;
                            stationMap[id].auraRing.material.opacity = 0.0;
                        }
                    });
                    if (intersects.length > 0) {
                        const hitId = intersects[0].object.userData.stationId;
                        if (hitId && stationMap[hitId]) {
                            stationMap[hitId].targetScale = 1.1;
                            stationMap[hitId].auraRing.material.opacity = 0.65;
                            container.style.cursor = 'pointer';
                        }
                    } else {
                        container.style.cursor = 'grab';
                    }
                    return;
                }

                // Smooth drag pan/rotate around map
                if (e.pointerId !== camState.pointerId) return;
                if (Math.hypot(e.clientX - camState.pointerStart.x, e.clientY - camState.pointerStart.y) > 6) camState.dragMoved = true;
                const dx = (e.clientX - camState.prevMouse.x) * 0.012;
                const dy = (e.clientY - camState.prevMouse.y) * 0.012;
                camState.prevMouse.x = e.clientX;
                camState.prevMouse.y = e.clientY;

                camState.targetPos.x = THREE.MathUtils.clamp(camState.targetPos.x - dx * 2.2, -10, 10);
                camState.targetPos.y = THREE.MathUtils.clamp(camState.targetPos.y + dy * 2.0, 5.0, 17.5);
            });

            container.addEventListener('pointerup', (e) => {
                if (!camState.isDragging || e.pointerId !== camState.pointerId) return;
                const moveDist = Math.hypot(e.clientX - camState.pointerStart.x, e.clientY - camState.pointerStart.y);
                camState.isDragging = false;

                if (moveDist < 6 && !camState.dragMoved) {
                    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObjects(stationMeshes, false);
                    if (intersects.length > 0) {
                        const hitId = intersects[0].object.userData.stationId;
                        if (hitId) focusStation(hitId);
                    }
                }
            });
            container.addEventListener('pointercancel', () => { camState.isDragging = false; });
            container.addEventListener('lostpointercapture', () => { camState.isDragging = false; });

            container.addEventListener('wheel', (e) => {
                e.preventDefault();
                const zoomDelta = e.deltaY * 0.008;
                camState.targetPos.z = THREE.MathUtils.clamp(camState.targetPos.z + zoomDelta, 6.5, 19.5);
                camState.targetPos.y = THREE.MathUtils.clamp(camState.targetPos.y + zoomDelta * 0.65, 5.2, 16.5);
            }, { passive: false });

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                fitCameraToViewport();
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        // 10. Main 60FPS Animation Loop
        const clock = new THREE.Clock();
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        function animateLoop() {
            requestAnimationFrame(animateLoop);
            if (document.hidden) return;
            const elapsed = reducedMotion ? 0 : clock.getElapsedTime();

            // Smooth camera interpolation
            camState.currentPos.lerp(camState.targetPos, 0.065);
            camState.currentLookAt.lerp(camState.targetLookAt, 0.075);
            camera.position.copy(camState.currentPos);
            camera.lookAt(camState.currentLookAt);

            // Animate station hover bounce & aura rings
            Object.keys(stationMap).forEach((id, idx) => {
                const entry = stationMap[id];
                const currentS = entry.group.scale.x;
                const nextS = THREE.MathUtils.lerp(currentS, entry.targetScale, 0.12);
                entry.group.scale.setScalar(nextS);

                // Subtle idle breathing float on roofs/buildings
                entry.group.position.y = entry.data.position.y + Math.sin(elapsed * 2.0 + idx) * 0.03;
                entry.auraRing.rotation.z = elapsed * 0.6;
            });

            // Animate glowing stepping stones wave pulse
            steppingStones.forEach(st => {
                const pulse = (Math.sin(elapsed * 3.0 - st.phase) + 1) * 0.5;
                st.mesh.material.emissiveIntensity = 0.08 + pulse * 0.35;
            });

            // Animate celestial top plaza rotation
            if (celestialWheelGroup) {
                celestialWheelGroup.rotation.y = elapsed * 0.12;
            }

            // Animate water pond shimmer
            if (waterMesh) {
                waterMesh.material.emissiveIntensity = 0.45 + Math.sin(elapsed * 3.2) * 0.2;
            }

            // Animate falling cherry blossom petals
            if (blossomPetalsSystem && !reducedMotion) {
                const posAttr = blossomPetalsSystem.geometry.attributes.position;
                const vels = blossomPetalsSystem.userData.velocities;
                for (let i = 0; i < vels.length; i++) {
                    let px = posAttr.getX(i) + vels[i].vx + Math.sin(elapsed * 1.5 + vels[i].sway) * 0.008;
                    let py = posAttr.getY(i) + vels[i].vy;
                    let pz = posAttr.getZ(i) + vels[i].vz;

                    if (py < 0.05) {
                        py = 9.5;
                        px = (Math.random() - 0.5) * 18;
                        pz = (Math.random() - 0.5) * 12;
                    }
                    posAttr.setXYZ(i, px, py, pz);
                }
                posAttr.needsUpdate = true;
            }

            // Animate golden fireflies
            if (firefliesSystem && !reducedMotion) {
                const fAttr = firefliesSystem.geometry.attributes.position;
                for (let i = 0; i < fAttr.count; i++) {
                    const fy = fAttr.getY(i) + Math.sin(elapsed * 2.2 + i) * 0.005;
                    fAttr.setY(i, fy);
                }
                fAttr.needsUpdate = true;
            }

            updateFloatingLabelsPosition();
            renderer.render(scene, camera);
        }

        // Start application on window load
        window.addEventListener('DOMContentLoaded', function () {
            renderSvgIconStudio();
            try {
                initThreeWorld();
                fitCameraToViewport();
                document.getElementById('scene-status').hidden = true;
            } catch (error) {
                console.error('Cannot initialize the 3D portfolio:', error);
                document.getElementById('scene-status').textContent = 'Thiết bị chưa mở được bản đồ 3D. Bạn vẫn có thể khám phá portfolio qua Mục lục và các mục bên dưới.';
                document.getElementById('labels-layer').hidden = true;
            }
        });
