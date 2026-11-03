document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Works Data for Modal
    const worksData = {
        work1: {
            title: "3Dアクションゲーム（開発中）",
            tech: "Unity / C# / Shader Graph",
            description: "チーム開発でプロジェクトリーダーを務めた3Dアクション作品。自作のキャラクターコントローラーやShader Graphによるエフェクトの構築を担当。",
            points: [
                "C#による拡張性の高いコンポーネント設計",
                "Shader Graphを活用したヒットエフェクトおよび環境シェーダー作成",
                "チーム内でのスムーズなタスク分担と進捗管理の徹底"
            ]
        }
    };

    // Global Functions for Modal
    window.openModal = function(workKey) {
        const data = worksData[workKey];
        if (!data) return;

        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const workModal = document.getElementById('work-modal');

        if (modalTitle) modalTitle.innerText = data.title;
        if (modalContent) {
            modalContent.innerHTML = `
                <div>
                    <span class="text-brand-cyan font-semibold">使用技術</span>
                    <div class="mt-1 text-white font-medium">${data.tech}</div>
                </div>

                <div class="border-t border-brand-border/60 pt-4">
                    <span class="text-white font-semibold">概要</span>
                    <p class="mt-1 text-gray-300 leading-relaxed">${data.description}</p>
                </div>

                <div class="border-t border-brand-border/60 pt-4">
                    <span class="text-white font-semibold">こだわり・技術ポイント</span>
                    <ul class="list-disc list-inside mt-2 space-y-1 text-gray-400">
                        ${data.points.map(pt => `<li>${pt}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (workModal) {
            workModal.classList.remove('hidden');
            // 背景スクロールを固定
            document.body.classList.add('modal-open');
        }
    };

    window.closeModal = function() {
        const workModal = document.getElementById('work-modal');
        if (workModal) {
            workModal.classList.add('hidden');
            // 背景スクロール固定を解除
            document.body.classList.remove('modal-open');
        }
    };

    // Close modal when clicking outside the content panel
    const workModal = document.getElementById('work-modal');
    if (workModal) {
        workModal.addEventListener('click', (e) => {
            if (e.target.id === 'work-modal') {
                window.closeModal();
            }
        });
    }
});