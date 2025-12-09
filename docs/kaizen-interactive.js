// Kaizen AI - Interactive Features
// Demonstrating continuous improvement in action

(function() {
    'use strict';

    // Kaizen Counter - Track improvements
    class KaizenCounter {
        constructor() {
            this.storageKey = 'kaizen_improvements';
            this.count = this.loadCount();
            this.init();
        }

        loadCount() {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const data = JSON.parse(stored);
                // Reset if it's a new day
                const today = new Date().toDateString();
                if (data.date !== today) {
                    return 0;
                }
                return data.count || 0;
            }
            return 0;
        }

        saveCount() {
            const data = {
                count: this.count,
                date: new Date().toDateString()
            };
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        }

        increment() {
            this.count++;
            this.saveCount();
            this.updateDisplay();
            this.celebrate();
        }

        updateDisplay() {
            const counterEl = document.getElementById('kaizen-counter');
            if (counterEl) {
                counterEl.textContent = this.count;
            }
        }

        celebrate() {
            // Simple celebration animation
            const counterEl = document.getElementById('kaizen-counter');
            if (counterEl) {
                counterEl.classList.add('celebrate');
                setTimeout(() => {
                    counterEl.classList.remove('celebrate');
                }, 600);
            }
        }

        init() {
            this.updateDisplay();
        }
    }

    // AI Improvement Suggestions
    class ImprovementAI {
        constructor() {
            this.suggestions = [
                "Add one more test case to your test suite today",
                "Review and refactor one function for better clarity",
                "Document one complex piece of logic",
                "Improve error handling in one module",
                "Optimize one slow query or operation",
                "Add type hints or improve type safety",
                "Reduce code duplication in one area",
                "Improve one accessibility feature",
                "Enhance one user experience detail",
                "Review and update one dependency"
            ];
            this.currentIndex = 0;
        }

        getSuggestion() {
            const suggestion = this.suggestions[this.currentIndex];
            this.currentIndex = (this.currentIndex + 1) % this.suggestions.length;
            return suggestion;
        }

        generatePersonalized(area) {
            const templates = {
                'code': "Review your code for one small improvement today",
                'tests': "Add one test case that catches a potential edge case",
                'docs': "Improve documentation for one function or module",
                'performance': "Identify and optimize one performance bottleneck",
                'quality': "Find and fix one code quality issue"
            };
            return templates[area] || this.getSuggestion();
        }
    }

    // Progress Visualization
    class ProgressVisualizer {
        constructor() {
            this.metrics = {
                improvements: 0,
                quality: 75,
                reliability: 80,
                efficiency: 70
            };
        }

        animateProgress(metric, target) {
            const barElement = document.querySelector(`.metric-${metric}.metric-fill`);
            const valueElement = document.getElementById(`metric-${metric}`);
            if (!barElement || !valueElement) return;

            const start = this.metrics[metric];
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = start + (target - start) * easeOut;
                
                barElement.style.width = `${current}%`;
                valueElement.textContent = `${Math.round(current)}%`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    this.metrics[metric] = target;
                }
            };

            requestAnimationFrame(animate);
        }

        simulateImprovement() {
            // Simulate continuous improvement
            const improvements = ['quality', 'reliability', 'efficiency'];
            improvements.forEach(metric => {
                if (this.metrics[metric] < 100) {
                    const increment = Math.random() * 2 + 0.5;
                    const newValue = Math.min(100, this.metrics[metric] + increment);
                    this.animateProgress(metric, newValue);
                }
            });
        }
    }

    // Interactive Challenge
    class KaizenChallenge {
        constructor() {
            this.challenges = [
                {
                    question: "What's one small improvement you can make to your code today?",
                    type: "reflection",
                    icon: "💡",
                    color: "#2d5aa0"
                },
                {
                    question: "Which area needs more test coverage?",
                    type: "quality",
                    icon: "🧪",
                    color: "#4CAF50"
                },
                {
                    question: "What's one thing you'd refactor if you had 15 minutes?",
                    type: "improvement",
                    icon: "🔧",
                    color: "#FF9800"
                },
                {
                    question: "What's one AI model behavior you'd like to improve?",
                    type: "ai",
                    icon: "🤖",
                    color: "#9C27B0"
                },
                {
                    question: "What edge case should you test for next?",
                    type: "testing",
                    icon: "🎯",
                    color: "#F44336"
                },
                {
                    question: "What documentation could be clearer?",
                    type: "docs",
                    icon: "📝",
                    color: "#2196F3"
                },
                {
                    question: "What performance bottleneck can you optimize?",
                    type: "performance",
                    icon: "⚡",
                    color: "#FFC107"
                },
                {
                    question: "What error handling could be more robust?",
                    type: "reliability",
                    icon: "🛡️",
                    color: "#00BCD4"
                }
            ];
            this.quickActions = [
                { text: "Add a test case", icon: "✓" },
                { text: "Improve error handling", icon: "✓" },
                { text: "Refactor one function", icon: "✓" },
                { text: "Update documentation", icon: "✓" },
                { text: "Optimize performance", icon: "✓" },
                { text: "Fix a bug", icon: "✓" }
            ];
        }

        showChallenge() {
            const challengeEl = document.getElementById('kaizen-challenge');
            if (!challengeEl) return;

            const challenge = this.challenges[Math.floor(Math.random() * this.challenges.length)];
            challengeEl.innerHTML = `
                <div class="challenge-content" style="border-color: ${challenge.color}">
                    <div class="challenge-header">
                        <span class="challenge-icon">${challenge.icon}</span>
                        <div>
                            <h4>Today's Kaizen Challenge</h4>
                            <p class="challenge-type">${challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)} Focus</p>
                        </div>
                    </div>
                    <div class="challenge-question">
                        <p>${challenge.question}</p>
                    </div>
                    
                    <div class="quick-actions">
                        <p class="quick-actions-label">Quick actions (click to add):</p>
                        <div class="quick-actions-grid">
                            ${this.quickActions.map(action => `
                                <button class="quick-action-btn" onclick="window.kaizenApp.addQuickAction('${action.text}')">
                                    <span class="quick-icon">${action.icon}</span>
                                    ${action.text}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <textarea id="challenge-response" placeholder="Describe your improvement idea or commit..."></textarea>
                    <div class="challenge-footer">
                        <button class="challenge-submit" onclick="window.kaizenApp.submitChallenge()">
                            <span>✨ Commit to Improvement</span>
                        </button>
                        <button class="challenge-skip" onclick="window.kaizenApp.skipChallenge()">
                            Get New Challenge
                        </button>
                    </div>
                </div>
            `;
        }

        addQuickAction(text) {
            const textarea = document.getElementById('challenge-response');
            if (textarea) {
                const current = textarea.value.trim();
                const newText = current ? `${current}\n• ${text}` : `• ${text}`;
                textarea.value = newText;
                textarea.focus();
                
                // Visual feedback
                const buttons = document.querySelectorAll('.quick-action-btn');
                buttons.forEach(btn => {
                    if (btn.textContent.includes(text)) {
                        btn.classList.add('clicked');
                        setTimeout(() => btn.classList.remove('clicked'), 300);
                    }
                });
            }
        }

        submitChallenge() {
            const response = document.getElementById('challenge-response')?.value;
            if (response && response.trim()) {
                // Show success animation
                const challengeEl = document.getElementById('kaizen-challenge');
                challengeEl.classList.add('success-animation');
                
                // Create success message
                const successMsg = document.createElement('div');
                successMsg.className = 'success-message';
                successMsg.innerHTML = `
                    <div class="success-content">
                        <span class="success-icon">🎉</span>
                        <h3>Improvement Committed!</h3>
                        <p>Every small step compounds into extraordinary results. Keep going!</p>
                        <div class="success-stats">
                            <span>Today's improvements: <strong id="success-counter">${window.kaizenCounter.count + 1}</strong></span>
                        </div>
                    </div>
                `;
                
                challengeEl.innerHTML = '';
                challengeEl.appendChild(successMsg);
                
                // Increment counter
                window.kaizenCounter.increment();
                
                // Show new challenge after 3 seconds
                setTimeout(() => {
                    challengeEl.classList.remove('success-animation');
                    this.showChallenge();
                }, 3000);
            } else {
                // Show error feedback
                const textarea = document.getElementById('challenge-response');
                if (textarea) {
                    textarea.classList.add('error-shake');
                    textarea.placeholder = 'Please share your improvement idea first!';
                    setTimeout(() => {
                        textarea.classList.remove('error-shake');
                        textarea.placeholder = 'Describe your improvement idea or commit...';
                    }, 2000);
                }
            }
        }

        skipChallenge() {
            this.showChallenge();
        }
    }

    // Smooth scroll and animations
    class ScrollAnimations {
        constructor() {
            this.observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            this.init();
        }

        init() {
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Intersection Observer for fade-in animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, this.observerOptions);

            // Observe all cards and sections
            document.querySelectorAll('.philosophy-card, .skill-category, .use-case-card, .feature-item').forEach(el => {
                observer.observe(el);
            });
        }
    }

    // Main App Controller
    class KaizenApp {
        constructor() {
            this.counter = new KaizenCounter();
            this.ai = new ImprovementAI();
            this.visualizer = new ProgressVisualizer();
            this.challenge = new KaizenChallenge();
            this.animations = new ScrollAnimations();
            this.init();
        }

        init() {
            // Initialize interactive elements
            this.setupImprovementButton();
            this.setupAISuggestions();
            this.setupProgressMetrics();
            this.setupChallenge();
            this.setupTypewriter();
            
            // Simulate continuous improvement every 5 seconds
            setInterval(() => {
                this.visualizer.simulateImprovement();
            }, 5000);
        }

        setupImprovementButton() {
            const button = document.getElementById('add-improvement');
            if (button) {
                button.addEventListener('click', () => {
                    this.counter.increment();
                    this.ai.showNewSuggestion();
                });
            }
        }

        setupAISuggestions() {
            const suggestionEl = document.getElementById('ai-suggestion');
            if (suggestionEl) {
                // Show initial suggestion
                suggestionEl.textContent = this.ai.getSuggestion();
                
                // Update suggestion every 10 seconds
                setInterval(() => {
                    suggestionEl.style.opacity = '0';
                    setTimeout(() => {
                        suggestionEl.textContent = this.ai.getSuggestion();
                        suggestionEl.style.opacity = '1';
                    }, 300);
                }, 10000);
            }
        }

        setupProgressMetrics() {
            // Animate metrics on load
            setTimeout(() => {
                this.visualizer.animateProgress('quality', 78);
                this.visualizer.animateProgress('reliability', 83);
                this.visualizer.animateProgress('efficiency', 73);
            }, 500);
        }

        setupChallenge() {
            this.challenge.showChallenge();
        }

        submitChallenge() {
            this.challenge.submitChallenge();
        }

        skipChallenge() {
            this.challenge.skipChallenge();
        }

        addQuickAction(text) {
            this.challenge.addQuickAction(text);
        }

        setupTypewriter() {
            const typewriterEl = document.getElementById('typewriter-text');
            if (!typewriterEl) return;

            const texts = [
                "Quality, refined daily.",
                "Continuous improvement in action.",
                "Every detail matters.",
                "Small steps, big impact."
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            const type = () => {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typewriterEl.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typewriterEl.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = isDeleting ? 50 : 100;

                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000; // Pause at end
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500;
                }

                setTimeout(type, typeSpeed);
            };

            type();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.kaizenApp = new KaizenApp();
        });
    } else {
        window.kaizenApp = new KaizenApp();
    }

    // Expose counter for global access
    window.kaizenCounter = window.kaizenApp?.counter || new KaizenCounter();

})();

