
        /*************************************************************************
         * PHẦN 1: BỘ HÌNH VẼ ICON ĐẠI DIỆN KIẾN TRÚC (2D/SVG ILLUSTRATED ASSETS)
         * Mỗi công trình được vẽ chi tiết bằng SVG Isometric chuẩn phong cách hình mẫu
         *************************************************************************/
        const STATIONS_DATA = [
            {
    "id": "uxui",
    "model": "visual",
    "code": "HỒ SƠ • 01",
    "label": "Justin",
    "fullName": "Khuê Văn Các — Về tôi & Cách làm việc",
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
                svgArt: `<img class="station-art" src="/assets/models/visual.webp" alt="Miniature Khuê Văn Các" width="440" height="440" loading="lazy">`
            },
            {
    "id": "visual",
    "model": "uxui",
    "code": "GIAO DIỆN • 02",
    "label": "Giao diện",
    "fullName": "Chùa Một Cột (Liên Hoa Đài) — Giao diện & Tương tác",
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
                svgArt: `<img class="station-art" src="/assets/models/uxui.webp" alt="Miniature Chùa Một Cột" width="440" height="440" loading="lazy">`
            },
            {
    "id": "system",
    "code": "HỆ THỐNG • 03",
    "label": "Hệ thống",
    "fullName": "Cổng Thành Huế — Hệ thống & Triển khai",
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
                svgArt: `<img class="station-art" src="/assets/models/system.webp" alt="Miniature Cổng Thành Huế" width="440" height="440" loading="lazy">`
            },
            {
    "id": "graphic",
    "code": "DỰ ÁN • 04",
    "label": "Dự án",
    "fullName": "Phố Hội An — Dự án & Sản phẩm",
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
                svgArt: `<img class="station-art" src="/assets/models/graphic.webp" alt="Miniature Phố Hội An" width="440" height="440" loading="lazy">`
            },
            {
    "id": "contact",
    "code": "LIÊN HỆ • 05",
    "label": "Liên hệ",
    "fullName": "Hiên Nhà Việt — Kết nối",
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
                svgArt: `<img class="station-art" src="/assets/models/contact.webp" alt="Miniature Hiên Nhà Việt" width="440" height="440" loading="lazy">`
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
        let firefliesSystem,petalsEnabled,petalField;
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
            scene.fog = new THREE.FogExp2(0xe6d7c3, 0.009);

            camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 120);
            camera.position.copy(camState.currentPos);
            camera.lookAt(camState.currentLookAt);

            renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.02;
            container.appendChild(renderer.domElement);

            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            mapRootGroup = new THREE.Group();
            scene.add(mapRootGroup);

            loadVietnamModels();
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
            const pond = STATIONS_DATA.find(station => (station.model || station.id) === 'uxui').position;
            pondPointLight.position.set(pond.x, pond.y + .5, pond.z);
            mapRootGroup.add(pondPointLight);
        }

        // 1. Build the Unfurling Oriental Parchment Scroll Base & Celestial Top Plaza
        function buildScrollTerrainAndFraming() {
            const loader = new THREE.TextureLoader();
            const textureReady = texture => {
                texture.encoding=THREE.sRGBEncoding;
                texture.anisotropy=renderer.capabilities?.getMaxAnisotropy() || 1;
            };
            const paperMaterial=new THREE.MeshStandardMaterial({color:new THREE.Color('#d0c29e').convertSRGBToLinear(),roughness:.94});
            const wood = new THREE.MeshStandardMaterial({color:new THREE.Color('#61432f').convertSRGBToLinear(),roughness:.72});
            loader.load('/assets/models/terrain-albedo.webp',texture=>{textureReady(texture);paperMaterial.map=texture;paperMaterial.needsUpdate=true;});
            loader.load('/assets/models/walnut.webp',texture=>{textureReady(texture);wood.map=texture;wood.color.setHex(0xffffff);wood.needsUpdate=true;});
            const edge = new THREE.MeshStandardMaterial({color:new THREE.Color('#352c23').convertSRGBToLinear(),roughness:.8});
            const brass = new THREE.MeshStandardMaterial({color:new THREE.Color('#b79556').convertSRGBToLinear(),metalness:.55,roughness:.5});
            const slab=(width,height,depth,y,material) => {
                const mesh=new THREE.Mesh(new THREE.BoxGeometry(width,height,depth),material);
                mesh.position.y=y;mesh.receiveShadow=true;mesh.castShadow=true;mapRootGroup.add(mesh);return mesh;
            };
            slab(17.7,.26,12.0,-.48,edge);
            slab(17.5,.28,11.8,-.23,wood);
            slab(16.8,.08,11.2,-.055,new THREE.MeshStandardMaterial({color:new THREE.Color('#b7a47c').convertSRGBToLinear(),roughness:1}));
            const map = new THREE.Mesh(new THREE.PlaneGeometry(16.8,11.2),paperMaterial);
            map.name='parchment-terrain';map.rotation.x=-Math.PI/2;map.position.y=-.009;map.receiveShadow=true;mapRootGroup.add(map);
            for (const z of [-5.75,5.75]) {
                const trim=slab(17.2,.025,.035,-.077,brass);trim.position.z=z;
            }
            const rollerGeo=new THREE.CylinderGeometry(.18,.18,11.72,24);
            for (const x of [-8.5,8.5]) {
                const roller=new THREE.Mesh(rollerGeo,wood);roller.rotation.x=Math.PI/2;roller.position.set(x,.045,0);roller.castShadow=true;mapRootGroup.add(roller);
                for (const z of [-5.87,5.87]) {
                    const cap=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.23,20),brass);cap.rotation.x=Math.PI/2;cap.position.set(x,.045,z);mapRootGroup.add(cap);
                }
                for (const z of [-5.55,5.55]) {
                    const collar=new THREE.Mesh(new THREE.TorusGeometry(.185,.018,6,24),brass);collar.position.set(x,.045,z);mapRootGroup.add(collar);
                }
            }
            buildRiverGarden();

            // Bronze relief inspired by Dong Son drums, behind the miniature landscape.
            celestialWheelGroup = new THREE.Group();
            celestialWheelGroup.position.set(-0.4, -0.1, -5.7);
            const bronze = new THREE.MeshStandardMaterial({ color: new THREE.Color('#826747').convertSRGBToLinear(), metalness: .45, roughness: .67 });
            const relief = new THREE.MeshStandardMaterial({ color: new THREE.Color('#c6a66c').convertSRGBToLinear(), metalness: .5, roughness: .56 });
            const drum = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.88, .25, 64), bronze);
            drum.receiveShadow = true;
            celestialWheelGroup.add(drum);
            for (const radius of [.78, 1.04, 1.58, 1.78, 2.42, 2.65, 2.76]) {
                const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, .015, 5, 64), relief);
                ring.rotation.x = Math.PI / 2;
                ring.position.y = .14;
                celestialWheelGroup.add(ring);
            }
            const vertices = [], triangle = (a,b,c) => vertices.push(...a,...b,...c);
            const point = (angle,radius) => [Math.cos(angle)*radius,.142,Math.sin(angle)*radius];
            for (let i=0; i<28; i++) {
                const angle=i*Math.PI/14, next=(i+1)*Math.PI/14;
                triangle([0,.142,0],point(next,i%2 ? .72 : .32),point(angle,i%2 ? .32 : .72));
            }
            for (let i=0; i<28; i++) {
                const angle=i*Math.PI/14;
                triangle(point(angle-.045,2.57),point(angle,2.43),point(angle+.045,2.57));
                triangle(point(angle-.045,1.18),point(angle,1.48),point(angle+.045,1.18));
            }
            for (let i=0; i<12; i++) {
                const a=i*Math.PI/6;
                triangle(point(a-.13,1.98),point(a+.07,2.21),point(a,1.96));
                triangle(point(a+.07,2.21),point(a+.18,2.12),point(a,1.96));
            }
            const engraving = new THREE.BufferGeometry();
            engraving.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
            engraving.computeVertexNormals();
            celestialWheelGroup.add(new THREE.Mesh(engraving,relief));
            mapRootGroup.add(celestialWheelGroup);
        }

        function riverRibbon(curve,width,height) {
            const vertices=[],indices=[];
            for(let i=0;i<=128;i++) {
                const t=i/128,point=curve.getPoint(t),tangent=curve.getTangent(t);
                const normal=new THREE.Vector3(-tangent.z,0,tangent.x).normalize().multiplyScalar(width*(.45+.075*Math.sin(t*24)+.025*Math.sin(t*57))*Math.min(1,Math.sin(t*Math.PI)*9));
                vertices.push(point.x+normal.x,height,point.z+normal.z,point.x-normal.x,height,point.z-normal.z);
                if(i<128){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}
            }
            const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
        }
        function buildRiverGarden() {
            const curve=new THREE.CatmullRomCurve3([[-4.35,-4.75],[-4.25,-2.7],[-3.9,-1.2],[-2.7,-.4],[-1.9,.7],[-1.1,1.9],[.5,2.75],[1.4,3.1],[1.8,3.7],[3.0,4.3],[4.4,4.15],[5.7,4.8]].map(([x,z])=>new THREE.Vector3(x,0,z)));
            const layers=[{width:1.10,y:.006,color:'#87956b',roughness:1},{width:.73,y:.014,color:'#b7aa83',roughness:.95},{width:.63,y:.024,color:'#548f88',roughness:.26}];
            for(const layer of layers){const mesh=new THREE.Mesh(riverRibbon(curve,layer.width,layer.y),new THREE.MeshStandardMaterial({color:new THREE.Color(layer.color).convertSRGBToLinear(),roughness:layer.roughness,metalness:layer.roughness<.5?.12:0}));mesh.name='river-garden';mesh.receiveShadow=true;mapRootGroup.add(mesh);}
            const stoneMaterial=new THREE.MeshStandardMaterial({color:new THREE.Color('#90917a').convertSRGBToLinear(),roughness:.95});
            const stones=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),stoneMaterial,72),dummy=new THREE.Object3D();
            for(let i=0;i<72;i++){
                const t=(i+.5)/72,point=curve.getPoint(t),tangent=curve.getTangent(t),side=i%2?1:-1;
                dummy.position.set(point.x-tangent.z*(.43+.08*Math.sin(i*3.4))*side,.055,point.z+tangent.x*(.43+.08*Math.sin(i*3.4))*side);dummy.scale.set(.035+(i%4)*.012,.025,.05);dummy.rotation.y=i*2.4;dummy.updateMatrix();stones.setMatrixAt(i,dummy.matrix);
            }
            stones.castShadow=true;stones.receiveShadow=true;mapRootGroup.add(stones);
            const ripples=new THREE.InstancedMesh(new THREE.BoxGeometry(.11,.003,.012),new THREE.MeshStandardMaterial({color:new THREE.Color('#a5c6b1').convertSRGBToLinear(),roughness:.3}),36);
            for(let i=0;i<36;i++){const t=(i+.5)/36,point=curve.getPoint(t),tangent=curve.getTangent(t);dummy.position.set(point.x+Math.sin(i*2.4)*.14,.027,point.z);dummy.rotation.set(0,Math.atan2(-tangent.z,tangent.x),0);dummy.scale.set(1,1,1);dummy.updateMatrix();ripples.setMatrixAt(i,dummy.matrix);}
            mapRootGroup.add(ripples);
            // A low arched stone bridge connects the western garden to the central pavilion.
            const bridge=new THREE.Group();bridge.position.set(-1.75,.06,1.0);bridge.rotation.y=.58;
            const stone=new THREE.MeshStandardMaterial({color:new THREE.Color('#c0b28f').convertSRGBToLinear(),roughness:.9});
            for(let i=0;i<13;i++){
                const x=-.72+i*.12,y=.10+.20*(1-(x/.78)**2);
                const block=new THREE.Mesh(new THREE.BoxGeometry(.12,.12,.60),stone);block.position.set(x,y,0);block.castShadow=true;block.receiveShadow=true;bridge.add(block);
                if(i%3===0)for(const z of [-.31,.31]){const post=new THREE.Mesh(new THREE.CylinderGeometry(.025,.035,.22,7),stone);post.position.set(x,y+.17,z);bridge.add(post);}
            }
            for(const z of [-.31,.31]){
                const railCurve=new THREE.CatmullRomCurve3(Array.from({length:13},(_,i)=>{const x=-.72+i*.12;return new THREE.Vector3(x,.41-.20*(x/.78)**2,z);}));
                bridge.add(new THREE.Mesh(new THREE.TubeGeometry(railCurve,20,.025,6,false),stone));
            }
            mapRootGroup.add(bridge);
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

        // Models are authored in Blender, then merged by material for browser rendering.
        let vietnamModelLibrary;
        function loadVietnamModels() {
            vietnamModelLibrary = new THREE.ObjectLoader().parse(VIETNAM_MODEL_DATA);
            const materials = new Set();
            vietnamModelLibrary.traverse(mesh => {
                if (!mesh.isMesh || materials.has(mesh.material)) return;
                materials.add(mesh.material);
                mesh.material.color.convertSRGBToLinear();
                mesh.material.emissive.convertSRGBToLinear();
            });
        }

        function buildAllStations3D() {
            STATIONS_DATA.forEach(station => {
                const group = new THREE.Group();
                group.position.set(station.position.x, station.position.y, station.position.z);
                group.userData = { stationId: station.id, stationData: station };
                const modelId=station.model || station.id;
                const model = vietnamModelLibrary.getObjectByName(modelId).clone();
                const bounds = new THREE.Box3().setFromObject(model);
                const size = bounds.getSize(new THREE.Vector3());
                group.add(model);
                group.userData.labelHeight = bounds.max.y + 0.24;
                const foundationHeight=station.position.y+bounds.min.y+.008;
                if(foundationHeight>.025){
                    const geometry=modelId==='uxui'?new THREE.CylinderGeometry(size.x/2,size.x/2+.06,foundationHeight,48):new THREE.BoxGeometry(size.x+.06,foundationHeight,size.z+.06);
                    const foundation=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:new THREE.Color('#aa9b7c').convertSRGBToLinear(),roughness:.95}));
                    foundation.name='terrace-foundation';foundation.position.set(station.position.x,foundationHeight/2-.008,station.position.z);foundation.receiveShadow=true;foundation.castShadow=true;mapRootGroup.add(foundation);
                }

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
                const hitGeo = new THREE.BoxGeometry(size.x, size.y, size.z);
                const hitMat = new THREE.MeshBasicMaterial({ visible: false });
                const hitMesh = new THREE.Mesh(hitGeo, hitMat);
                hitMesh.position.copy(bounds.getCenter(new THREE.Vector3()));
                hitMesh.userData = { stationId: station.id };
                group.add(hitMesh);
                stationMeshes.push(hitMesh);

                if (modelId === 'uxui') waterMesh = model.getObjectByName('water');
                const glow = new THREE.PointLight(0xffb35c, .12, 3.1, 2);
                glow.position.set(modelId === 'contact' ? -.6 : 0, modelId === 'uxui' ? 1.7 : 1.05, .55);
                group.add(glow);
                lanternPointLights.push(glow);

                mapRootGroup.add(group);
                stationMap[station.id] = {
                    group,
                    auraRing,
                    data: station,
                    targetScale: 1.0
                };
            });
        }

        function buildDecorativeEnvironment3D() {
            mapRootGroup.add(vietnamModelLibrary.getObjectByName('environment').clone());
        }

        function makePetalGeometry() {
            const shape=new THREE.Shape();
            shape.moveTo(0,-.58);
            shape.bezierCurveTo(-.40,-.32,-.48,.26,-.13,.57);
            shape.lineTo(0,.46);shape.lineTo(.12,.57);
            shape.bezierCurveTo(.45,.29,.40,-.34,0,-.58);
            const geometry=new THREE.ShapeGeometry(shape,9),position=geometry.attributes.position,colors=[];
            for(let i=0;i<position.count;i++){
                const x=position.getX(i),y=position.getY(i);
                position.setZ(i,.10*x*x+.045*Math.cos(y*3)-.035*Math.abs(x));
                const edge=THREE.MathUtils.clamp(.85+Math.abs(x)*.25+y*.09,.78,1);
                colors.push(1,edge,edge+.02);
            }
            geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
            geometry.computeVertexNormals();return geometry;
        }
        function buildPetalField() {
            const count=56,geometry=makePetalGeometry();
            const opacity=new THREE.InstancedBufferAttribute(new Float32Array(count).fill(.92),1);
            opacity.setUsage(THREE.DynamicDrawUsage);geometry.setAttribute('petalOpacity',opacity);
            const material=new THREE.MeshStandardMaterial({color:0xffffff,vertexColors:true,roughness:.68,side:THREE.DoubleSide,transparent:true,depthWrite:false,alphaTest:.025});
            material.onBeforeCompile=shader=>{
                shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nattribute float petalOpacity;\nvarying float vPetalOpacity;').replace('#include <begin_vertex>','#include <begin_vertex>\nvPetalOpacity=petalOpacity;');
                shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying float vPetalOpacity;').replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.a *= vPetalOpacity;');
            };
            petalField=new THREE.InstancedMesh(geometry,material,count);petalField.name='settling-petals';petalField.frustumCulled=false;
            petalField.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            const surfaces=[];mapRootGroup.updateWorldMatrix(true,true);
            mapRootGroup.traverse(mesh=>{if(mesh.isMesh&&!mesh.isInstancedMesh&&mesh.material?.isMeshStandardMaterial&&mesh.material.visible!==false)surfaces.push(mesh);});
            petalField.userData={petals:[],surfaces,ray:new THREE.Raycaster(),dummy:new THREE.Object3D()};
            for(let i=0;i<count;i++){
                const record={index:i,localPoint:new THREE.Vector3(),localNormal:new THREE.Vector3(),point:new THREE.Vector3(),normal:new THREE.Vector3(),flatRotation:new THREE.Quaternion(),landingRotation:new THREE.Quaternion()};
                resetPetal(record,true);petalField.userData.petals.push(record);
                petalField.setColorAt(i,new THREE.Color(['#edb8b5','#e3a3ad','#f2cebf'][i%3]).convertSRGBToLinear());
            }
            mapRootGroup.add(petalField);updatePetalField(0);
        }
        function resetPetal(record,initial=false) {
            const data=petalField.userData,x=(Math.random()-.5)*15.5,z=(Math.random()-.5)*10.1;
            data.ray.set(new THREE.Vector3(x,12,z),new THREE.Vector3(0,-1,0));
            const hit=data.ray.intersectObjects(data.surfaces,false)[0];
            record.surface=hit?.object || null;
            record.localPoint.copy(hit?.point || new THREE.Vector3(x,0,z));
            record.localNormal.copy(hit?.face?.normal || new THREE.Vector3(0,1,0));
            if(record.surface)record.surface.worldToLocal(record.localPoint);
            record.y=(hit?.point.y || 0)+(initial ? .25+Math.random()*6 : 6+Math.random()*3);
            record.size=.085+Math.random()*.045;record.speed=.24+Math.random()*.22;
            record.phase=Math.random()*Math.PI*2;record.spin=.25+Math.random()*.3;record.fallAge=Math.random()*10;
            record.stage=initial&&record.index%4===0?'resting':'falling';record.restAge=0;record.restDuration=3+Math.random()*3;
            record.roll=Math.random()*Math.PI*2;record.landingRotation.identity();
        }
        function updatePetalField(delta) {
            if(!petalField)return;
            const {dummy,petals}=petalField.userData,opacities=petalField.geometry.attributes.petalOpacity;
            for(const record of petals){
                record.point.copy(record.localPoint);record.normal.copy(record.localNormal);
                if(record.surface){record.surface.updateWorldMatrix(true,false);record.point.applyMatrix4(record.surface.matrixWorld);record.normal.transformDirection(record.surface.matrixWorld);}
                if(record.normal.y<0)record.normal.negate();
                record.flatRotation.setFromUnitVectors(new THREE.Vector3(0,0,1),record.normal).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),record.roll));
                let alpha=.92;
                if(record.stage==='falling'){
                    record.fallAge+=delta;record.y-=record.speed*delta;
                    const height=Math.max(0,record.y-record.point.y),sway=Math.min(.30,height*.08);
                    dummy.position.copy(record.point);dummy.position.y=record.y;
                    dummy.position.x+=Math.sin(record.phase+record.fallAge*.7)*sway;
                    dummy.position.z+=Math.cos(record.phase+record.fallAge*.45)*sway*.45;
                    dummy.rotation.set(.65+Math.sin(record.fallAge*.9+record.phase)*.7,record.fallAge*record.spin,Math.sin(record.fallAge*.55+record.phase)*.4);
                    if(height<=.018){record.stage='resting';record.restAge=0;record.landingRotation.copy(dummy.quaternion);}
                }
                if(record.stage==='resting'){
                    record.restAge+=delta;
                    const fade=THREE.MathUtils.clamp((record.restAge-record.restDuration)/1.4,0,1);
                    alpha=.92*(1-fade);
                    dummy.position.copy(record.point).addScaledVector(record.normal,.010+.009*Math.exp(-record.restAge*7)*Math.sin(record.restAge*14));
                    dummy.quaternion.copy(record.landingRotation).slerp(record.flatRotation,THREE.MathUtils.clamp(record.restAge/.4,0,1));
                    if(fade>=1)resetPetal(record);
                }
                dummy.scale.setScalar(record.size);dummy.updateMatrix();petalField.setMatrixAt(record.index,dummy.matrix);opacities.setX(record.index,alpha);
            }
            petalField.instanceMatrix.needsUpdate=true;opacities.needsUpdate=true;
        }

        // 5. Build Falling Cherry Blossom Petals & Golden Fireflies Particle Systems
        function buildParticleSystems() {
            const pixels = new Uint8Array(32 * 32 * 4);
            for (let y=0; y<32; y++) for (let x=0; x<32; x++) {
                const dx=(x-15.5)/15.5, dy=(y-15.5)/15.5, offset=(y*32+x)*4;
                const distance=Math.hypot((dx+dy)*.8,(dy-dx)*1.5);
                pixels.set([255,255,255,Math.round(Math.max(0,Math.min(1,(1-distance)*8))*255)],offset);
            }
            const sprite = new THREE.DataTexture(pixels,32,32,THREE.RGBAFormat);
            sprite.magFilter=THREE.LinearFilter;
            sprite.minFilter=THREE.LinearFilter;
            sprite.needsUpdate=true;
            buildPetalField();
            setPetalsEnabled(!reducedMotion);

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
                size: 0.045,
                map: sprite,
                alphaTest: .05,
                depthWrite: false,
                transparent: true,
                opacity: 0.75
            });
            firefliesSystem = new THREE.Points(fireflyGeo, fireflyMat);
            scene.add(firefliesSystem);
        }

        function setPetalsEnabled(enabled) {
            petalsEnabled=enabled;
            if(petalField)petalField.visible=enabled;
            document.body.classList[enabled?'add':'remove']('petals-enabled');
            const button=document.getElementById('petal-toggle');
            button.setAttribute('aria-pressed',String(enabled));button.setAttribute('aria-label',enabled?'Tắt cánh hoa rơi':'Bật cánh hoa rơi');button.title=enabled?'Tắt cánh hoa rơi':'Bật cánh hoa rơi';
        }
        function togglePetals(){setPetalsEnabled(!petalsEnabled);}

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
                worldPos.y += (entry.group.userData.labelHeight || 3.25) * entry.group.scale.y;

                worldPos.project(camera);

                const x = (worldPos.x * widthHalf) + widthHalf;
                const y = Math.max(112, -(worldPos.y * heightHalf) + heightHalf);

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
            camState.targetLookAt.set(st.position.x + 0.75, st.position.y + 1.05, st.position.z);

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
            camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(Math.PI / 8.5) / Math.min(1, camera.aspect / 1.35)));
            camera.updateProjectionMatrix();
        }

        // 8. Atmosphere & Lighting Mode Switcher (Day / Golden Sunset / Night Spirit)
        let automaticAtmosphere=true,currentAtmosphere='day';
        const atmosphereColors={
            day:{background:0xe6d7c3,ambient:0xfff5e4,sun:0xfff0d4,ambientPower:.78,sunPower:1.15,pond:.45},
            sunset:{background:0xd99b78,ambient:0xffb085,sun:0xff7b38,ambientPower:.68,sunPower:1.35,pond:.7},
            night:{background:0x161b2e,ambient:0x4b639e,sun:0x8da8ff,ambientPower:.52,sunPower:.65,pond:1.1}
        };
        function getLiveAtmosphere(date=new Date()) {
            const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Ho_Chi_Minh',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(date);
            const value=type=>Number(parts.find(part=>part.type===type).value);
            const hour=value('hour')+value('minute')/60+value('second')/3600;
            const stops=[[0,'night'],[5,'night'],[6,'sunset'],[8,'day'],[16,'day'],[17.5,'sunset'],[19,'night'],[24,'night']];
            let start=stops[0],end=stops[1];
            for(let i=0;i<stops.length-1;i++)if(hour>=stops[i][0]&&hour<stops[i+1][0]){start=stops[i];end=stops[i+1];break;}
            const progress=(hour-start[0])/(end[0]-start[0]);
            return {hour,from:start[1],to:end[1],mix:progress*progress*(3-2*progress),clock:`${String(value('hour')).padStart(2,'0')}:${String(value('minute')).padStart(2,'0')}`};
        }
        function paintAtmosphere(from,to=from,mix=0) {
            const a=atmosphereColors[from],b=atmosphereColors[to],color=key=>new THREE.Color(a[key]).lerp(new THREE.Color(b[key]),mix),number=key=>THREE.MathUtils.lerp(a[key],b[key],mix);
            currentAtmosphere=mix<.5?from:to;
            document.body.setAttribute('data-atmosphere',currentAtmosphere);
            if(!ambientLight)return;
            scene.background.copy(color('background'));scene.fog.color.copy(color('background'));
            ambientLight.color.copy(color('ambient'));ambientLight.intensity=number('ambientPower');
            mainDirLight.color.copy(color('sun'));mainDirLight.intensity=number('sunPower');pondPointLight.intensity=number('pond');
            const night=THREE.MathUtils.lerp(from==='night'?1:from==='sunset'?.45:0,to==='night'?1:to==='sunset'?.45:0,mix);
            lanternPointLights.forEach(light=>{light.intensity=.12+night*.83;});
            vietnamModelLibrary?.traverse(mesh=>{if(mesh.isMesh&&['lantern','lanternGold'].includes(mesh.material.name))mesh.material.emissiveIntensity=.28+night*1.02;});
            if(firefliesSystem)firefliesSystem.material.opacity=.08+night*.67;
            for(const mode of ['day','sunset','night','auto']) {
                const active=mode==='auto'?automaticAtmosphere:!automaticAtmosphere&&mode===currentAtmosphere;
                const button=document.getElementById('env-'+mode);button.classList[active?'add':'remove']('is-active');button.setAttribute('aria-pressed',String(active));
            }
        }
        function syncAtmosphereClock(date=new Date()) {
            const time=getLiveAtmosphere(date),button=document.getElementById('env-auto');
            document.getElementById('live-clock').textContent=time.clock;
            button.title=`Giờ Việt Nam ${time.clock} · ${automaticAtmosphere?'Đang tự đổi ánh sáng':'Bấm để trở về giờ thực tế'}`;
            button.setAttribute('aria-label',`Tự đổi ánh sáng theo giờ Việt Nam, ${time.clock}`);
            if(automaticAtmosphere){paintAtmosphere(time.from,time.to,time.mix);if(mainDirLight)mainDirLight.position.set(Math.sin((time.hour-6)/12*Math.PI-Math.PI/2)*18,14+Math.max(0,Math.sin((time.hour-6)/12*Math.PI))*12,12);}
        }
        function setAtmosphere(mode) {
            if(!atmosphereColors[mode])return;
            automaticAtmosphere=false;paintAtmosphere(mode);syncAtmosphereClock();
        }
        function enableLiveAtmosphere(){automaticAtmosphere=true;syncAtmosphereClock();}

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
            const delta=Math.min(clock.getDelta(),.05);
            const elapsed = reducedMotion ? 0 : clock.elapsedTime;
            if(petalsEnabled)updatePetalField(delta);

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
                entry.group.position.y = entry.data.position.y + Math.sin(elapsed * 1.1 + idx) * 0.012;
                entry.auraRing.rotation.z = elapsed * 0.6;
            });

            // Animate glowing stepping stones wave pulse
            steppingStones.forEach(st => {
                const pulse = (Math.sin(elapsed * 3.0 - st.phase) + 1) * 0.5;
                st.mesh.material.emissiveIntensity = currentAtmosphere === 'night' ? .025 + pulse*.04 : 0;
            });

            // Animate water pond shimmer
            if (waterMesh) {
                waterMesh.material.emissiveIntensity = 0.04 + Math.sin(elapsed * 2.2) * 0.025;
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

        document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncAtmosphereClock();});

        // Start application on window load
        window.addEventListener('DOMContentLoaded', function () {
            renderSvgIconStudio();
            try {
                initThreeWorld();
                fitCameraToViewport();
                enableLiveAtmosphere();
                setInterval(syncAtmosphereClock,1000);
                document.getElementById('scene-status').hidden = true;
            } catch (error) {
                console.error('Cannot initialize the 3D portfolio:', error);
                document.getElementById('scene-status').textContent = 'Thiết bị chưa mở được bản đồ 3D. Bạn vẫn có thể khám phá portfolio qua Mục lục và các mục bên dưới.';
                document.getElementById('labels-layer').hidden = true;
            }
        });
