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
                    type: "reflection"
                },
                {
                    question: "Which area needs more test coverage?",
                    type: "quality"
                },
                {
                    question: "What's one thing you'd refactor if you had 15 minutes?",
                    type: "improvement"
                }
            ];
        }

        showChallenge() {
            const challengeEl = document.getElementById('kaizen-challenge');
            if (!challengeEl) return;

            const challenge = this.challenges[Math.floor(Math.random() * this.challenges.length)];
            challengeEl.innerHTML = `
                <div class="challenge-content">
                    <h4>Today's Kaizen Challenge</h4>
                    <p>${challenge.question}</p>
                    <textarea id="challenge-response" placeholder="Share your improvement idea..."></textarea>
                    <button class="challenge-submit" onclick="window.kaizenApp.submitChallenge()">Commit to Improvement</button>
                </div>
            `;
        }

        submitChallenge() {
            const response = document.getElementById('challenge-response')?.value;
            if (response && response.trim()) {
                alert('🎉 Great! You\'ve committed to continuous improvement. Every small step counts!');
                document.getElementById('challenge-response').value = '';
                window.kaizenCounter.increment();
            }
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

