import './prince_app.css'

export default function prince_application_datalog() {
    return <div className="prince-wrapper">
        <div className="prince-header">
            <h1>Math seems to be popular at Princeton.</h1>
            <div>
                <h5>Aayush Mitra</h5>
            <h5 className='prince-date'>September 20, 2025</h5>
            </div>
        </div>
        <div className="prince-body">
            <p>Despite Princeton having a great emphasis on the <a href='https://admission.princeton.edu/academics/what-does-liberal-arts-mean' target='_blank'>liberal arts</a> and humanities, Mathematics
seems to play a significant role in the <a href="https://projects.dailyprincetonian.com/frosh-survey-2028/" target='_blank'>Class of 2028&apos;</a>
s high school <a href="https://projects.dailyprincetonian.com/frosh-survey-2028/academics.html" target='_blank'>academic profiles</a>.</p>
            {/* Popular AP Tests */}
            <iframe title="Popular AP Tests" aria-label="Column Chart" id="datawrapper-chart-MPOFx" src="https://datawrapper.dwcdn.net/MPOFx/1/" scrolling={'no'} frameBorder={0} style={{width: '0px', border: 'none', minWidth: '100% !important', height: '593px'}}></iframe>
            <p>Among the AP tests taken by the class, Calculus BC was taken by 63.5 percent of the class,
making it the second most taken test after English Language & Composition. Furthermore,
Calculus AB has quite a high proportion of students having taken it as well, with 43.5 percent, a
rate comparable to the AP science tests.</p>
            {/* Popular IB Tests */}
            <iframe title="Popular IB Tests" aria-label="Column Chart" id="datawrapper-chart-MPOFx" src="https://datawrapper.dwcdn.net/GHw56/1/" scrolling={'no'} frameBorder={0} style={{width: '0px', border: 'none', minWidth: '100% !important', height: '593px'}}></iframe>

            <p>Mathematics: Analysis and Approaches is the most common IB exam taken by incoming
students, with 81.8 percent having taken it. Coming in second, third, and fourth please are
variants of IB language courses. Once again, mathematics has a strikingly large emphasis in the
academics of incoming students.</p>
            {/* Mathematical Achievement */}
            <iframe title="Mathematical Achievement" aria-label="Column Chart" id="datawrapper-chart-MPOFx" src="https://datawrapper.dwcdn.net/VHCAu/1/" scrolling={'no'} frameBorder={0} style={{width: '0px', border: 'none', minWidth: '100% !important', height: '490px'}}></iframe>

            <p>With regard to overall mathematical achievement, a majority of the freshman student body
have taken Calculus BC or higher, with 36.6 percent having taken BC Calculus, 10.8 percent
having taken Multivariable Calculus, and 20.3 percent having taken Beyond Multivariable
Calculus. Meanwhile, only an aggregate of 4.5 percent of students took Pre-Calculus or lower.
This illustrates the emphasis on mathematics in high-school across the entire pool of admits.</p>
{/* Intended field math achievement */}
            <iframe title="Intended Field of Study by Mathematical Achievement" aria-label="Column Chart" id="datawrapper-chart-MPOFx" src="https://datawrapper.dwcdn.net/wr8oc/1/" scrolling={'no'} frameBorder={0} style={{width: '0px', border: 'none', minWidth: '100% !important', height: '535px'}}></iframe>

            <p>When narrowed down to specific areas of study, this trend seems to persist. In the Natural
Sciences, 30.9 percent of students had taken Beyond Multivariable Calculus, 11.1 percent of
students had taken Multivariable Calculus, and 35.8 percent had taken BC Calculus. In
Engineering, a similar distribution persists, with 24.1 percent, 14.0 percent, and 40.1 percent
having taken each course respectively. However, even in the social sciences, we see that
approximately 93 percent of students have taken some Calculus, with nearly 16 percent having
taken Multivariable Calculus or higher, and in the humanities, a similar distribution persists as
well. In both of these areas of study, only about 7.5 percent of students had taken Pre-Calculus
as their highest level of mathematics.</p>
            <p>
                Despite the high aptitude for mathematics displayed among the freshman student body,
<a href="https://admission.princeton.edu/apply/before-you-apply" target='_blank'> Princeton recommends </a>
“Four years of study in mathematics (including calculus for students
interested in engineering).
” Meanwhile, the requirement for language is equivalent,
recommending
“Four years of one language,
” despite many students starting at the beginner
level and taking the <a href='https://advising.princeton.edu/degree-planning/general-education-requirements/language-requirement' target='_blank'>3-4 semester language requirement sequence</a>. Yet, although about 95% of
freshman students have taken Calculus in high school, Princeton only reserves the
recommendation of Calculus for prospective engineering students.
            </p>
            <p>Data and graphs were used from The Daily Princetonian&apos;s <a href='https://projects.dailyprincetonian.com/frosh-survey-2028/' target='_blank'>Frosh Survey 2028</a>. Thank you for your consideration of me for the Prince.</p>
            <div style={{height:'100px'}}></div>
        </div>
    </div>
}