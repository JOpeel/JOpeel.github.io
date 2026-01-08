
class LeftComponent extends HTMLElement {

    connectedCallback() {
        const hasLoadedBefore = sessionStorage.getItem('loaded') === 'true';

        if(!hasLoadedBefore){
            this.innerHTML = `            
          <div id="left">  <!--            TODO dotted line -->
            <div id="top-line">
<!--                <a href="/index.html">-->
                <img src="/wordmark.svg" class="wordmark" alt="Jacob Peel">
<!--                </a>-->
                <div id="links">
                    <a href="/Documents/CV%20Jacob%20Peel.docx"><p> CV </p></a>
                    <a href="https://www.linkedin.com/in/jacob-peel-6408382ba"><p> LinkedIn </p></a>
                </div>
            </div>
    
            <div id="qualifications">
                <div class="qualifications-line">
                    Human-Computer Interaction MSc (2025)
                </div>
                <div class="qualifications-line">
                    Computer Science BSc (2024)
                </div>
            </div>
    
            <div id="bio">
                <p class="bio-line">
                    (UK-based Designer and engineer.)
                </p>
                <p class="bio-line">
                    Human-centred tools - ideation, research, prototyping, development.
                </p>
                <p class="bio-line">
                    Visual identity and content design.
                </p>
                <p class="bio-line">
                    This website showcases many of my projects as a portfolio, detailing the processes undertaken, problems solved, and skills utilised!
                </p>
                <p class="bio-line">
                    When I’m not at my desk you can often find me up a mountain in disappointing conditions.
                    <br>
                    When I AM at my desk, you can find me <a style="text-decoration: underline;" href="https://formsubmit.co/el/zumiwo" target="_blank">here</a>
                </p>
            </div>
    
        </div>
    `;
            sessionStorage.setItem('loaded', 'true');

        } else {
            this.innerHTML = `            
          <div id="left">  <!--            TODO dotted line -->
            <div id="top-line">
<!--                <a href="/index.html">-->
                <img src="/wordmark.svg" class="wordmark" alt="Jacob Peel">
<!--                </a>-->
                <div id="links">
                    <a href="/Documents/CV%20Jacob%20Peel.docx"><p> CV </p></a>
                    <a href="https://www.linkedin.com/in/jacob-peel-6408382ba"><p> LinkedIn </p></a>
                </div>
            </div>
    
            <div id="qualifications-static">
                <div class="qualifications-line">
                    Human-Computer Interaction MSc (2025)
                </div>
                <div class="qualifications-line">
                    Computer Science BSc (2024)
                </div>
            </div>
    
            <div id="bio">
                <p class="bio-line-static">
                    (UK-based Designer and engineer.)
                </p>
                <p class="bio-line-static">
                    Human-centred tools - ideation, research, prototyping, development.
                </p>
                <p class="bio-line-static">
                    Visual identity and content design.
                </p>
                <p class="bio-line-static">
                    This website showcases many of my projects as a portfolio, detailing the processes undertaken, problems solved, and skills utilised!
                </p>
                <p class="bio-line-static">
                    When I’m not at my desk you can often find me up a mountain in disappointing conditions.
                    <br>
                    When I AM at my desk, you can find me <a style="text-decoration: underline;" href="https://formsubmit.co/el/zumiwo" target="_blank">here</a>
                </p>
            </div>
    
        </div>
    `;
            sessionStorage.setItem('loaded', 'true');
        }
    }



}

customElements.define('my-left', LeftComponent);