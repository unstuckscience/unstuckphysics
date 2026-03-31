// assets/js/gravitation/orbital-visualizer.js

(function() {
    const canvas = document.getElementById('orbitCanvas');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('radiusSlider');
    const radiusDisplay = document.getElementById('radiusVal');
    const vStat = document.getElementById('vStat');
    const pStat = document.getElementById('pStat');

    // Simulation Constants
    const GM = 500000; // Arbitrary constant for visual scaling
    let angle = 0;
    let radius = parseInt(slider.value);

    function resizeCanvas() {
        canvas.width = 500;
        canvas.height = 500;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // 1. Draw Central Planet (Earth)
        const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 40);
        gradient.addColorStop(0, '#4facfe');
        gradient.addColorStop(1, '#00f2fe');
        ctx.beginPath();
        ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.stroke();

        // 2. Draw Orbit Path
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // 3. Physics Calculations
        // v = sqrt(GM/r)
        const velocity = Math.sqrt(GM / radius);
        // T = 2pi * r / v
        const period = (2 * Math.PI * radius) / velocity;
        
        // Update stats
        vStat.innerText = (velocity * 100).toFixed(0) + " m/s";
        pStat.innerText = (period / 10).toFixed(1) + " hrs";

        // 4. Update Position
        const angularVelocity = velocity / radius;
        angle += angularVelocity * 0.5; // Scale for smooth animation

        const satX = centerX + radius * Math.cos(angle);
        const satY = centerY + radius * Math.sin(angle);

        // 5. Draw Velocity Vector (Green Arrow)
        const vScale = 3; 
        const vx = -Math.sin(angle) * velocity * vScale;
        const vy = Math.cos(angle) * velocity * vScale;

        ctx.beginPath();
        ctx.moveTo(satX, satY);
        ctx.lineTo(satX + vx, satY + vy);
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Arrow head
        const headlen = 10;
        const vAngle = Math.atan2(vy, vx);
        ctx.beginPath();
        ctx.moveTo(satX + vx, satY + vy);
        ctx.lineTo(satX + vx - headlen * Math.cos(vAngle - Math.PI / 6), satY + vy - headlen * Math.sin(vAngle - Math.PI / 6));
        ctx.moveTo(satX + vx, satY + vy);
        ctx.lineTo(satX + vx - headlen * Math.cos(vAngle + Math.PI / 6), satY + vy - headlen * Math.sin(vAngle + Math.PI / 6));
        ctx.stroke();

        // 6. Draw Satellite
        ctx.beginPath();
        ctx.arc(satX, satY, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#ff9800';
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff9800';
        ctx.fill();
        ctx.shadowBlur = 0;

        requestAnimationFrame(draw);
    }

    slider.oninput = function() {
        radius = parseInt(this.value);
        radiusDisplay.innerText = radius;
    };

    window.addEventListener('load', () => {
        resizeCanvas();
        draw();
    });
})();