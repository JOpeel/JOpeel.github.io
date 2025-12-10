class LeftComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `            
          <div id="left">  <!--            TODO dotted line -->
            <div id="topline">
<!--                <a href="/index.html">-->
                <img src="\\wordmark.svg" class="wordmark" alt="Jacob Peel">
<!--                </a>-->
                <div id="links">
                    <a href="/Documents/CV%20Jacob%20Peel.docx"><p> CV </p></a>
                    <a href="https://www.linkedin.com/in/jacob-peel-6408382ba"><p> LinkedIn </p></a>
                </div>
            </div>
    
            <div id="qualifications">
                <div class="qualificationsline">
                    Human-Computer Interaction MSc (2025)
                </div>
                <div class="qualificationsline">
                    Computer Science BSc (2024)
                </div>
            </div>
    
            <div id="bio">
                <p class="bioline">
                    UK-based Designer and engineer.
                </p>
                <p class="bioline">
                    Human-centred tools - ideation, research, prototyping, development.
                </p>
                <p class="bioline">
                    Visual identity and content design.
                </p>
                <p class="bioline">
                    This website showcases many of my projects as a portfolio, detailing the processes undertaken, problems solved, and skills utilised!
                </p>
                <p class="bioline">
                    When I’m not at my desk you can often find me up a mountain in disappointing conditions.
                    <br>
                    When I AM at my desk, you can find me at jacobowainpeel@gmail.com.
                </p>
            </div>
    
        </div>
    `;
    }
}
customElements.define('my-left', LeftComponent);