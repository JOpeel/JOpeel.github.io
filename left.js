class LeftComponent extends HTMLElement {

    connectedCallback() {
        const hasLoadedBefore = sessionStorage.getItem('loaded') === 'true';

        // 1. Determine the suffix based on the condition
        // If it has loaded before, use '-static', otherwise use an empty string.
        const isStatic = hasLoadedBefore ? '-static' : '';

        // 2. Render the HTML once, injecting the suffix variable
        this.innerHTML = `            
          <div id="left"> 
            <div id="top-line">
                <img src="/Images/wordmark.svg" class="wordmark" alt="Jacob Peel">
                <div id="links">
                    <a href="/Documents/CV%20Jacob%20Peel.pdf" target="_blank"><p> CV </p></a>
                    <a href="https://www.linkedin.com/in/jacob-peel-6408382ba" target="_blank"><p> LinkedIn </p></a>
                </div>
            </div>
    
            <div id="qualifications${isStatic}">
                <div class="qualifications-line">
                    Human-Computer Interaction MSc (2025)
                </div>
                <div class="qualifications-line">
                    Computer Science BSc (2024)
                </div>
            </div>
    
            <div id="bio">
                <p class="bio-line${isStatic}">
                    UK-based designer and engineer.
                </p>
                <p class="bio-line${isStatic}">
                    Human-centred tools - ideation, research, prototyping, development.
                </p>
                <p class="bio-line${isStatic}">
                    Visual identity and content design.
                </p>
                <p class="bio-line${isStatic}">
                    This website showcases many of my projects as a portfolio, detailing the processes undertaken, problems solved, and skills utilised!
                </p>
                <p class="bio-line${isStatic}">
                    When I’m not at my desk you can often find me up a mountain in disappointing conditions.
                    <br>
                    When I AM at my desk, you can find me <a style="text-decoration: underline;" href="https://formsubmit.co/el/zumiwo" target="_blank">here</a>
                </p>
            </div>
    
        </div>
    `;

        // 3. Ensure we mark it as loaded for the next refresh
        if (!hasLoadedBefore) {
            sessionStorage.setItem('loaded', 'true');
        }
    }

}

customElements.define('my-left', LeftComponent);