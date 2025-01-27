export type Course = {
    names: { title: string, cid: string }[],
    grades: number[],
    length?: "Year" | "Semester" | "Semester/Year",
    credit: string, section: string,
    description: string, hw?: string,
    prereqs?: string, recCourses?: string,
    slos?: string[], notes?: string[]
}

const courses: {timestamp: string, data: Course[]} = {
    "timestamp": "2022-09-15T00:39:51.594Z",
    "data": [
        {
            "names": [
                {
                    "title": "VIDEO PRODUCTION – DIGITAL FILMMAKING I",
                    "cid": "1037"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "In this course, students will investigate techniques of video production: directorial style, script development, camera \ntechnique, editing, etc. Evaluation of the aesthetic principles of videography, investigation of selected historical topics, \nand “hands-on” training in video technique will form the basis of most class sessions. Students will write, shoot, and \nedit short films ranging from the traditional to the avant-garde. In order to produce original digital films, students will \nbe trained in camera technique and in the uses of non-linear editing and audio creation software applications.",
            "hw": "Minimal homework",
            "slos": [
                "1",
                "2",
                "4",
                "6",
                "7"
            ],
            "notes": [
                "May also satisfy the VPA graduation requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED VIDEO PRODUCTION: DIGITAL FILMMAKING II",
                    "cid": "1038"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Advanced Video Production Digital Filmmaking II is a course which provides students with opportunities to work on \nindividual and small group video projects at the mastery level with industry grade equipment and software. Peer \nmentorship and brief workshop methods will be employed to provide students with understandings of advanced \nprinciple and practices of digital filmmaking. Students in this course will be expected to use time outside of the school \nday in collaborative groups during the production process and are expected to complete post production within our \nspecialty lab via Adobe Premiere, After Effects and Audition. \nThis course can be used to fulfill the Career-Technical Education graduation requirements or the “f” requirement, the \nVisual and Performing Arts requirement, for the CSU and UC systems with honors credit. May be repeated for credit \nwith permission of instructor.",
            "hw": "Minimal homework",
            "recCourses": "Completion of Video Production",
            "slos": [
                "1",
                "2",
                "4",
                "6",
                "7"
            ],
            "notes": [
                "May also satisfy the VPA graduation requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED VIDEO PRODUCTION: DIGITAL FILMMAKING HONORS",
                    "cid": "1044"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "The honors option for Advanced Video Production Digital Filmmaking II is an advanced course providing students \nwith opportunities to work on individual and small group video projects at the mastery level with industry grade \nequipment and software. Peer mentorship and brief workshop methods will be employed to provide students with \nunderstandings of advanced principle and practices of digital filmmaking. Students in this course will be expected to \nuse time outside of the school day in collaborative groups during the production process and are expected to complete \npost production within our specialty lab via Adobe Premiere, After Effects and Audition. \nThe honors option includes additional written, production presentation and exhibition work that may include, but is \nnot limited to, genre analysis essay, script revision and portfolio, production journals, film analysis journals, a capstone \nend of class portfolio reflection and presentation. \nThis course can be used to fulfill the Career-Technical Education graduation requirements or the “f” requirement, the \nVisual and Performing Arts requirement, for the CSU and UC systems with honors credit. May be repeated for credit \nwith permission of instructor.",
            "hw": "Minimal homework",
            "recCourses": "Completion of Video Production",
            "slos": [
                "1",
                "2",
                "4",
                "6",
                "7"
            ],
            "notes": [
                "May also satisfy the VPA graduation requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "AUDIO MUSIC PRODUCTION I",
                    "cid": "1054"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "The Audio Music Production course focuses on the aesthetic qualities of sound production and analyzes the impact \nof digital audio technology as an inherent form of communication in today's society, including production, recording, \ncomposing and editing. Students will convey creative expression and develop ideas individually and within groups, \nwrite compositions, proposals, and budgets. Projects will consist of historical and or cultural nature, and completed \nprojects will be an audio product based on compositions. Students will also write and produce podcasts and songs in \na variety of formats. Students will study the impact audio and sound production on our society from a social, \neconomic, and political viewpoint. Students will learn the history of sound production and the technological advances \nin the art form. The class will gain knowledge and utilization of microphones, both digital, and analog and computer-\nbased audio editing and recording equipment, and software programs such as Logic Pro, Pro Tools, Ableton Live, and \nAdobe Audition. Study and training in the Audio Music Production course will prepare students for careers in music \nengineering and production, post-production for film and television, and live sound-mixing for theater and concerts. \n\nStudents will develop an extensive Digital Audio Portfolio - A collection of sound designs, podcasts, and produced \nmusic.",
            "hw": "Minimal homework",
            "slos": [
                "1",
                "2",
                "4",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED AUDIO MUSIC PRODUCTION",
                    "cid": "1055"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This CTE Audio Production capstone course is a course that builds on the skill sets of the Audio Production 1 course \nand further prepares students for a wide variety of careers in professional audio industries. In addition to strengthening \nthe skills learned in Audio Production I, students will learn advanced live recording, advanced mixing, synthesis, \"off-\nsite\" recording and mixing, and live sound reinforcement, music composition and songwriting. Students will create \nand perform their own live electronic performance piece and explore their personal interests (digital music \nproduction, film scoring, sound design), while being challenged with real-world concepts and technologies found in \ntoday's professional audio industries. Each unit focuses on a major project, building off the skills learned in Audio \nProduction 1 and in previous projects. The class will gain knowledge and utilization of microphones, both digital, and \nanalog and computer-based audio editing and recording equipment, and software programs such as Logic Pro, \nAbleton Live, and Adobe Audition. Students will also create a digital personal portfolio of their work for final \npresentation. Study and training in the Audio Production course will prepare students for careers in music \nengineering and production, post-production for film and television, and live sound-mixing for theater and concerts. \nStudents will develop an extensive Digital Audio Portfolio (a collection of sound designs, podcasts, and produced \nsongs).",
            "hw": "Minimal homework",
            "slos": [
                "1",
                "2",
                "4",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "BROADCAST JOURNALISM",
                    "cid": "1494"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course is an intensive laboratory course in gathering, writing and producing news for broadcast media for \nGunnTV on the Titan Broadcast Network (TBN). Workshop methods and “hands-on” training will be employed to \nprovide students with an understanding of the principles of broadcast television production, video journalism, and \nradio. Operation of broadcast newsrooms, ethics in broadcast journalism, interviewing techniques, and media \ncriticism will also be examined in the course. This course also serves to broadcast campus news and selected features \nto the Gunn High School community. Students will be required to attend a weekly lab session in the broadcast studio \nduring the 0 period (7:50 a.m. - 8:50 a.m.) to produce a live television announcements show. Lab sessions will be \nscheduled weekly. Broadcasting operates as a project-based classroom where collaborative groups will be responsible \nfor creating student produced school video features. All student productions will be broadcast over television and the \nweb. Field video production will be applied to explore various types of programs such as student documentaries, sports \nand events. Speaking and interpersonal abilities are integral to this class for interviews and appearances on camera. \nThis course will address the hands-on use of technology, primarily cameras, video editing software, podcasts, and web \nstreaming.",
            "hw": "Attend weekly live television lab session required (The G-Live Morning Show). Video productions will require additional time outside of scheduled class period.",
            "slos": [
                "1",
                "2",
                "4",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "BEGINNING JOURNALISM",
                    "cid": "7625"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Through reading and analyzing professional models of non-fiction writing including news, features, editorials and \nreviews, students will learn to plan, write and revise news stories, profiles, personal experience, observational and \npersuasive writing. Students will acquire the skills of fact gathering and note-taking through interviews with primary \nsources and research of secondary sources. This elective course is a prerequisite for both Advanced Journalism and \nMedia Leadership and Management GraphPub (H). See the Media Arts Pathway on page 13.",
            "hw": "Minimal – most work happens in class",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED JOURNALISM & MEDIA STUDIES – NEWSPAPER (ORACLE)",
                    "cid": "8674"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Advanced Journalism and Media Studies (AJAMS) builds upon the foundational understandings of journalistic writing \nand ethics that were explored in the Beginning Journalism course. Working under the guidance of students in Media \nLeadership and Management (and under the supervision of the teacher/adviser), AJAMS students will employ various \ngenres of journalistic writing to investigate topics of importance within their local community, and will work together \nto develop and circulate a regularly recurring journalistic publication or other media production to their school \ncommunity, publishing in print, digital, audio, broadcast/streaming, and/or social media. Students will progress in \ntheir ability to defend – both orally and in writing – decisions regarding the medium and style of their journalistic \noutput, and its legal and ethical soundness. Students will analyze the writing styles and perspectives of prominent \nlocal media while also frequently reflecting on the styles, perspectives, and values represented in their own publication. \nThis course may be repeated for credit, but students entering their senior year will enroll in Media Leadership and \nManagement or Media Leadership and Management Honors.",
            "hw": "Minimal, except during production times when students are expected to attend after- school production two times a month",
            "recCourses": "Successful completion of Beginning Journalism. Adviser interview required",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Not approved NCAA course"
            ]
        },
        {
            "names": [
                {
                    "title": "(OLYMPIAN/YEARBOOK)",
                    "cid": "8672"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Advanced Journalism and Media Studies (AJAMS) builds upon the foundational understandings of journalistic \nwriting and ethics that were explored in the Beginning Journalism course. Working under the guidance of students in \nMedia Leadership and Management (and under the supervision of the teacher/adviser), AJAMS students will employ \nvarious genres of journalistic writing to investigate topics of importance within their local community, and will work \ntogether to develop and circulate a regularly recurring journalistic publication or other media production to their \nschool community, publishing in print, digital, audio, broadcast/streaming, and/or social media. Students will progress \nin their ability to defend – both orally and in writing – decisions regarding the medium and style of their journalistic \noutput, and its legal and ethical soundness. Students will analyze the writing styles and perspectives of prominent local \nmedia while also frequently reflecting on the styles, perspectives, and values represented in their own publication. This \ncourse may be repeated for credit.",
            "hw": "minimal except during production times when students are expected to attend after- school production a few times a year",
            "recCourses": "Successful completion of Beginning Journalism, Graphic Design or Photo plus required adviser interview for AJAMS Graphic Publication (The Olympian).",
            "slos": [
                "1",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "MEDIA LEADERSHIP & MANAGEMENT GRAPHIC PRODUCTION H",
                    "cid": "8655"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course is a capstone option in an extensive media and digital communication strand offered at the school. \nStudents will have successfully completed the course sequence that covers journalism reporting and writing, design, \nphotography and production. This leads to a year of serving in a publication leadership role in peer-editing and \nproduction teams for student media as well as studying college and career options. Options will range from serving as \na section editor to managing editor to business manager, or as an editor-in-chief over a full staff. In addition to peer \nediting responsibilities, leadership and management, students will work to create a sense of community, foster the \ndevelopment of good journalistic principles, help each other and their younger peers in the selection of story ideas, \nconduct primary research, and will serve as writing coaches. \nThe honors class differs from its parallel in Media Leadership and Management in that students will complete more \nextensive personal explorations, reflections and analytical work in leadership and management. In key assignments, \nthey will interact with professional media leaders. They will demonstrate mastery of all journalistic reporting and \nwriting principles as well as print, digital and mobile package planning and execution.",
            "hw": "Minimal, except during production times when students are expected to attend after- school production two times a month. Includes summer reading assignment.",
            "recCourses": "Successful completion of prior courses in Journalism pathway",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "STAGE TECHNOLOGY",
                    "cid": "1087 Semester 1"
                },
                {
                    "title": "STAGE TECHNOLOGY",
                    "cid": "1088 Semester 2"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Stage Technology and Design is designed to integrate theoretical and practical knowledge of stage technology and \ndesign. Students will study the design and construction of sets, lighting, sound, and costumes, and apply their skills by \ndeveloping design concepts and mounting productions from a variety of theatrical genres. By assuming vital roles in \nplay productions, students will work effectively in leadership and ensemble situations, and experience the relationship \nof technical theatre to the theatrical event as a whole. Students will learn to operate theatrical equipment and tools \nsafely, and use these skills to provide technical services for many school stage activities. This course satisfies the Career \nTechnical Education Program requirement and Visual and Performing Arts requirement, and may be repeated for \nfour years. Students who enroll in and complete Stage Technology will be given special consideration during the \nselection process for the Gunn Robotics Team (GRT).",
            "hw": "None",
            "slos": [
                "4",
                "6",
                "7"
            ],
            "notes": [
                "This class meets during 8th period"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED STAGE TECHNOLOGY & DESIGN",
                    "cid": "4915"
                },
                {
                    "title": "ADVANCED STAGE TECHNOLOGY & DESIGN*",
                    "cid": "4915D*"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Students will continue to practice their technical theater skills at an advanced level through working in leadership roles \non Gunn Theatre Productions. They will manage and supervise a design or construction crew while drawing on their \nknowledge of theater history, design aesthetics, and creative processes. At the end of a production, students will be \nresponsible for a production report, analyzing their process, successes and challenges. This course will also require \nstudents to archive their designs and experiences in a portfolio, which they will present at the end of the spring semester. \nThis course satisfies the Career Technical Education Program requirement and Visual Performing Arts requirement, and \nmay be repeated for three years. Students who enroll in and complete Stage Tech 2 will be given special consideration \nduring the selection process for the Gunn Robotics Team (GRT).",
            "hw": "4 hours a week on average",
            "recCourses": "Successful completion of one full year of Stage Technology, and approval of the instructor",
            "slos": [
                "4",
                "6",
                "7"
            ],
            "notes": [
                "Dual Enrollment Course: Please see p.88 for information regarding Dual Enrollment courses. Although not a-g approved, credits for this course are transferable for college credit. Note that this year-long Gunn dual enrollment course includes three separate courses at Foothill, which are not repeatable.",
                "THTR 45A – 4 quarter UC/CSU transferable units",
                "THTR 45B – 4 quarter UC/CSU transferable units",
                "THTR 45C – 4 quarter UC/CSU transferable units Students who choose to take Stage Tech 2 for two or more years will need to enroll in Dual enrollment Stage Tech 2 (4915D) for the first 3 semesters, and regular Stage Tech 2 (491)5 for the fourth and any subsequent semesters. If only taken for one year, enroll in 4915D."
            ]
        },
        {
            "names": [
                {
                    "title": "PRINCIPLES OF BUSINESS",
                    "cid": "4507"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course introduces students to the study of Business Management, Economics, Personal Finance, Marketing, and \nEntrepreneurship. Students complete projects on a range of business topics: economic concepts, financial literacy, \ninvestments, sales and marketing strategies, career exploration, and business plan. Students apply what they learn to a \nvariety of real-life examples and scenarios, and share their learning through written work and oral presentations. This \ncourse sets the foundation for students seeking success in any career. Students looking to participate in DECA and/or \nFBLA should take this course to be eligible for competitions.",
            "hw": "1 hour per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "BUSINESS, ENTREPRENEURSHIP & MATH",
                    "cid": "2433"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "BEAM (Business, Entrepreneurship and Math) is a private-public partnership that replicates real-life business \nenvironments, which require application of mathematical principles. During this course, students develop their own \n\nstart-ups while learning entrepreneurship, finance, and quantitative marketing from customized curricula created in \npartnership with Ernst & Young and PricewaterhouseCoopers. The students design and develop self-driven solutions \nwhile being mentored by the teacher and designated mentors. After finishing the BEAM curriculum and successfully \ncompleting the business pathway, students will have the opportunity to work for local companies or non-profit \norganizations through internships and/or volunteer consulting work.",
            "hw": "1 hour per week",
            "recCourses": "Successful completion of an introductory Algebra course and Principles of Business course",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students may elect to receive math elective credit in lieu of CTE credit for this course"
            ]
        },
        {
            "names": [
                {
                    "title": "CULINARY SCIENCE – INTRODUCTION",
                    "cid": "5620"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "If you have a special liking for good food, even if you have never done much more than boil water, this class is for you. \nIf you have had lots of experience in the kitchen but want to stretch your skills, want to explore the why’s and how’s \nof delicious foods, this is your course, too. An art as well as a science, good cooking rests on basic principles and skills \nthat have been refined over centuries. These principles and skills are demonstrated and practiced in class in clear, easy \nsteps. Plunge in and have fun! Your family and friends will relish the results while you build your reputation as a \nterrific cook.",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "CULINARY SCIENCE – INTERNATIONAL & REGIONAL",
                    "cid": "5621"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Join a classroom tour of famous food of the regional United States, Asia, Europe, Africa and more. In addition to \nselecting, preparing, tasting and enjoying famous dishes typical to each region, you will learn about preparation \nmethods, serving techniques and special equipment specific to the dishes made. If you love to cook and enjoy trying \nnew and different foods, this eighteen-week travelogue of international culinary delights is for you!",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "SPORTS NUTRITION",
                    "cid": "5619"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course is all about empowering students with the knowledge to create nutritionally balanced meals that will \nenhance sports performance as well as overall good health. Guest speakers (Athletes, Sports Trainers, Nutritionists, \nFormer Student Athletes) will be invited into our classroom, and we will use technology to actively engage your mind \nin the dynamic field of Sports Nutrition. Emphasis is placed on healthy food selection, improving nutritional value \nthrough ingredient selection, and cooking techniques that will enable students to create nutritionally balanced \ndelicious dishes. If you are interested in eating for everyday activities or you especially have sports success on your \nmind; this class will prepare you for a healthy lifestyle with plenty of cooking and you will be creating and analyzing \nrecipes to support peak performance.",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "FIBER ARTS & FASHION DESIGN",
                    "cid": "5613"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "If you like working with fabric and textiles to create unique products, this is the class for you. In this course you will \nwork with many different fibers and material applications. We will cover the fashion design basics - from repairing \nclothes you already have, to repurposing thrift store finds and learning how to design and construct clothing. Other \ntechniques and skills covered are: quilting, embroidery, machine appliqué, knitting and crocheting. You will also learn \nto use the sewing and embroidery machines to enhance your creations.",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "INTERIOR DESIGN",
                    "cid": "5851"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Do you care about your living environment? Do you want your room and your home to reflect you? In this course you \nwill examine your likes and dislikes and to discover and develop your own personal sense of good taste. You will create \nyour own floor plan, select and arrange furniture, fabrics, and accessories for your “dream home.” You will learn \narchitectural and furniture styles, line, design, form, color and texture and be able to combine them into the kind of \nliving environment which best reflects you. You will also develop an ability to decorate on a budget and how to \ninexpensively change the appearance of a room.",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "EARLY CHILDHOOD DEVELOPMENT 1",
                    "cid": "5912"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved ”g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Students receive classroom instruction working with infant, toddler and preschool children. Students learn basic \nprinciples of child growth and development, explore the characteristics of early childhood programs and participate \nin the implementation of early childhood curriculum. Emphasis is on principles underlying physical, cognitive, \nemotional and social development, and methods of child study and practical application of theory.",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "BIOTECHNOLOGY: THEORY & PRACTICES",
                    "cid": "3955"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved ”d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course will introduce students to the theoretical aspects of Biotechnology (Cell Biology, Microbiology, Molecular \nBiology, Immunology) and societal issues arising from this new technology. Hands on laboratory activities will \nreinforce theoretical information and teach lab safety, data analysis, the scientific method, and related computer skills. \nThis course may include topical speakers from biotechnology.",
            "hw": "No assigned homework. Students are given class time to complete work. Some students may need extra time to complete assignments at home.",
            "recCourses": "Successful completion of Biology and Chemistry or with department approval",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "For UC/CSU application, the course is approved “d,” Laboratory Science"
            ]
        },
        {
            "names": [
                {
                    "title": "*",
                    "cid": "4533D"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC/CSU Transferable Credit",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Athletic injury prevention is emphasized through pre-participation physical exams, exercise programs, preventative \ntaping, proper fitting of equipment, and protective braces. Basic injury recognition and emergency response of acute \ntrauma. Practical hands-on skills are emphasized in laboratories.",
            "hw": "1-2 hours per week",
            "recCourses": "Completion of Biology; open to 10, 11, 12 graders"
        },
        {
            "names": [
                {
                    "title": "CRIMINAL & CIVIL LAW",
                    "cid": "4540"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This is a very exciting class that will challenge your perspective of law and punishment as we explore controversial \ncases and issues. Criminal and Civil Law examines the types of crimes, legal rights, as well as the civil consequences \nfaced after a crime. Criminal and Civil Law class also examines torts, individual rights and liberties, contract law and \njuvenile law. A field trip to criminal court will occur and there will be guest speakers such as lawyers, a police officer, \namong others.",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "LAW 1",
                    "cid": "4541"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Law 1 is an exciting legal course targeting students who may consider a career in the legal field. This exciting course \ntakes the students through the criminal justice system, criminal law, Constitutional law, procedural law, adjudication \nprocess and an in depth look into landmark court cases. Students also examine the Bill of Rights and how they apply \nto law. There are many expert guest speakers, such as the FBI, four mock trials, debates, and a field trip to the Ninth \nCircuit Court of Appeals in this year’s course.",
            "hw": "Most work is completed in class. Little to no homework.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AUTOMOTIVE TECHNOLOGY 1",
                    "cid": "5043"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course assumes no previous knowledge about automobiles and their operational systems. \nThe course is designed for the owner/driver, and emphasizes the understanding of the operation of automotive \ncomponents, consumer awareness, preventive maintenance practices, tune-up procedures, elementary trouble \nanalysis, and minor repairs. Approximately 40 percent of the class time is devoted to discussions and demonstrations \nand 60 percent to related shop activities on shop units and personal automobiles. This is the type of course automobile \n\nowners wish they would have taken. Students who enroll in and complete Automotive Technology 1 will be given \nspecial consideration during the selection process for the Gunn Robotics Team (GRT).",
            "hw": "None",
            "slos": [
                "1",
                "4",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AUTOMOTIVE TECHNOLOGY 2",
                    "cid": "5050"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "Designed for the student who desires more information, experience and proficiency related to automotive operation, \nrepair and maintenance. Instrument troubleshooting of electrical systems, brake systems, suspension systems, and \ncustom alignment are but a few of the topics explored in depth in the course. Vehicle design and parts \nconstruction/fabrication projects. Certain operations and projects are required but adequate time is provided for \npersonal projects and problems. Competent students who wish to be teacher aides or desire further grooming for \nemployment can make special arrangements for a third year of Auto with the instructor’s permission. They will be \nclassified as teacher aides or special service. Students who enroll in and complete Automotive Technology 2 will be \ngiven special consideration during the selection process for the Gunn Robotics Team (GRT)",
            "hw": "None",
            "recCourses": "Completion of Auto 1 or permission of the instructor",
            "slos": [
                "1",
                "4",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "DIGITAL ELECTRONICS – PLTW",
                    "cid": "3247"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course will introduce basic analog and digital electronics concepts to students who want to explore how binary \nnumbers and logic elements are used to implement complex digital circuits. The course is based on curriculum \nprovided by Project Lead the Way (PLTW) and includes topics such as analog circuits, transistors and logic gates, \nBoolean algebra and Karnaugh mapping, combinational and sequential logic, synchronous and asynchronous clocks, \nstate machines, programmable logic devices and programming microcontrollers. Students use a circuit design program \nto simulate circuits before building them using soldered breadboards and integrated circuits. Students develop personal \nengineering notebooks that document skills, design plans and completed projects. Teamwork, problem-solving, and \ncommunication skills are developed through group projects.",
            "hw": "1 hour per week",
            "recCourses": "Completion of Algebra 1A. Concurrent enrollment in a college preparatory math AND science course",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "INTRODUCTION TO ENGINEERING DESIGN – PLTW",
                    "cid": "8569"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course will introduce students to foundational concepts of design and engineering. The course is based on \ncurriculum provided by Project Lead the Way (PLTW) and has been customized to address Gunn High School’s \nSilicon Valley student population and equipment, including a state-of-the-art 3D printer. Topics include the process \nof design, technical sketching, CAD (computer-aided design), dimensional analysis, statistical analysis using Microsoft \nExcel, tolerances, reverse engineering and 3D printing. Students develop personal engineering notebooks that \ndocument skills and designs, including several projects printed on the 3D printer. Teamwork and communication \nskills are developed through group projects. Students in this course have the opportunity to compete in regional and \nstatewide PLTW design competitions hosted by local tech companies and universities. Students who enroll in and \ncomplete Introduction to Engineering Design will be given special consideration during the selection process for the \nGunn Robotics Team (GRT).",
            "hw": "Students are given class time and resources to complete assignments. Some students may need additional time at home.",
            "recCourses": "Successful completion of Algebra IA. Concurrent enrollment in a college preparatory math AND science course",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "INTRODUCTION TO ENGINEERING DESIGN HONORS – PLTW",
                    "cid": "8685"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course will introduce students to foundational concepts of design and engineering. The course is based on \ncurriculum provided by Project Lead the Way (PLTW) and has been customized to address Gunn High School’s \nSilicon Valley student population and equipment, including a state-of-the-art 3D printer. Topics include the process \nof design, technical sketching, CAD (computer-aided design), dimensional analysis, data analysis and presentation \nusing spreadsheets, tolerances, reverse engineering and 3D printing. Students develop personal engineering notebooks \nthat document skills and designs, including several projects printed on the 3D printer. Teamwork and communication \nskills are developed through group projects. Students in this course have the opportunity to compete in regional and \nstatewide PLTW design competitions hosted by local tech companies and universities. Students who enroll in and \ncomplete Introduction to Engineering Design will be given special consideration during the selection process for the \nGunn Robotics Team (GRT). \nThe honors option requires additional independent study to earn CAD certification.",
            "hw": "Students are given class time and resources to complete assignments. Some students may need additional time at home",
            "recCourses": "Successful completion of Algebra IA. Concurrent enrollment in a college preparatory math AND science course",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "PRINCIPLES OF ENGINEERING & ROBOTICS – PLTW",
                    "cid": "5090"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course will introduce basic engineering concepts and mathematical models to students who want to build and \nprogram their own mechanical inventions. The course is based on curriculum provided by Project Lead the Way \n(PLTW) and includes topics such as simple machines, work and energy, statics, electronics, robotic control and real-\ntime programming, and projectile motion. Theory is developed through application problems and hands-on projects \nbuilt from VEX robotics and other components. Students develop personal engineering notebooks that document \nskills, design plans and completed projects. Teamwork, problem-solving, and communication skills are developed \nthrough group projects. Students in this course also have the opportunity to compete in VEX Robotics competitions. \nStudents who enroll in and complete Principles of Engineering and Robotics will be given special consideration during \nthe selection process for the Gunn Robotics Team (GRT).",
            "hw": "~1 hour per week",
            "recCourses": "Successful completion of Algebra IA. Concurrent enrollment in a college preparatory math AND science course",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "PRINCIPLES OF ENGINEERING & ROBOTICS HONORS – PLTW",
                    "cid": "5092"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course will introduce basic engineering concepts and mathematical models to students who want to build and \nprogram their own mechanical inventions. The course is based on curriculum provided by Project Lead the Way \n(PLTW) and includes topics such as simple machines, work and energy, statics, electronics, robotic control and real-\ntime programming, and projectile motion. Theory is developed through application problems and hands-on projects \nbuilt from VEX robotics and other components. Students develop personal engineering notebooks that document \nskills, design plans and completed projects. Teamwork, problem-solving, and communication skills are developed \nthrough group projects. Students in this course also have the opportunity to compete in VEX Robotics competitions. \nStudents who enroll in and complete Principles of Engineering and Robotics will be given special consideration during \nthe selection process for the Gunn Robotics Team (GRT). \nThe honors option requires additional independent on-line study to earn a pre-engineering certification (by passing \nan online exam administered by the REC Foundation).",
            "hw": "~1 hour per week",
            "recCourses": "Successful completion of Algebra IA. Concurrent enrollment in a college preparatory math AND science course",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ENGINEERING TECHNOLOGY",
                    "cid": "8574"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This is a hands-on course that will provide students real-life experience in mechanical design, machine shop skills, \nengineering project work and leadership. The curriculum is designed to fit the needs of both four-year-college-bound \nstudents and those interested in a two-year career tech education. Conceptual instruction begins with the design cycle, \nwhich students experience in all stages, including hands-on skill development from brainstorming to prototyping to \nmanufacturing and testing. Mechanism design and prototyping, programming, electronics, pneumatics, machining \nand welding, and CAD (computer-aided design) technologies are introduced to all students using industry-standard \nequipment. Applications of scientific and engineering principles, group dynamics, leadership and communication \nskills are developed in an activity-oriented approach including informal classroom challenges and two or more FIRST \nRobotics competitions each year. \nStudents who wish to enroll in Engineering Technology must select this course as an Alternate since members will be \nselected as members of the Gunn Robotics Team (GRT). Team members will be selected based on team needs of skills. \nAn application process will be used to award spaces within GRT, and detailed information regarding this process will \nbe published in January. Students who have completed Introduction to Engineering Design, Principles of Engineering \nand Robotics, an Automotive Technology course, or a Stage Technology course will be given special consideration \nduring the selection process.",
            "hw": "Yearlong participation in after-school and weekend activities is required. First semester 4 hours per week average, second semester (January through April) 12 hours per week minimum.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP COMPUTER SCIENCE PRINCIPLES",
                    "cid": "8635"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "AP Computer Science Principles introduces students to the central ideas of computer science, inviting them to develop \nthe computational thinking vital for success across multiple disciplines. The course encourages students to apply \ncreative processes when developing computational artifacts. Students design and implement innovative solutions \nusing an iterative process similar to what artists, writers, computer scientists, and engineers use to bring ideas to life. \nThey will also develop effective communication and teamwork skills, working individually and collaboratively to solve \nproblems, and discussing and writing about the importance of these problems and the impacts to their community, \nsociety, and the world.",
            "hw": "0-1 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ],
            "notes": [
                "Not approved NCAA course"
            ]
        },
        {
            "names": [
                {
                    "title": "FUNCTIONAL & OBJECT-ORIENTED PROGRAMMING",
                    "cid": "8634"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This project-based course introduces the student to the functional and object-oriented programming paradigms. It \nincludes concepts such as functions, conditionals, data abstraction, recursion, lambda, higher-order functions, lists, \nloops, arrays, interfaces, inheritance, and polymorphism. Some projects throughout the year will consist of creating \nsmall games, simulating real-world processes, taking apart a computer, and producing graphically interesting \nprograms (such as Conway’s Game of Life) in which almost all of these big ideas are needed.",
            "hw": "1-1.5 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "This is a college prep course",
                "Not approved NCAA course"
            ]
        },
        {
            "names": [
                {
                    "title": "AP COMPUTER SCIENCE A",
                    "cid": "2491"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course is designed to give the student a taste of what it is like to be a freshman computer science major at a good \nuniversity. The course includes data abstraction, procedural abstraction, evaluation processes, top-down design, \niteration, recursion, primitive and abstract data types, data structures (arrays, lists, sets, tables, queues, stacks, trees), \nalgorithm analysis and orders of growth, the beginnings of an object system (with message passing), searching and \nsorting, inheritance and delegation, interfaces and polymorphism, and more! Students should be able to analyze code in \nterms of functionality, efficiency, readability, reusability, modularity, and meaning.",
            "hw": "4 hours per week",
            "recCourses": "Completion of Functional & Object-Oriented Programming",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "This is an advanced placement course",
                "Not approved NCAA course"
            ]
        },
        {
            "names": [
                {
                    "title": "COMPUTER SCIENCE CAPSTONE",
                    "cid": "8638"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "This course allows students to apply their computational skills in a real-world context. Students will work in teams to \nuse the design thinking process to identify a problem within their local community and then develop a possible \nsolution. Students will work with mentors related to their problem areas and the teacher of the course will facilitate \nthe design-thinking process and support students in managing their projects. The course will culminate in a public \npresentation of their yearlong project.",
            "hw": "1-1.5 hours per week",
            "recCourses": "Prior completion of or concurrent enrollment in AP Computer Science A",
            "notes": [
                "Also qualifies for Career Tech Ed credits"
            ]
        },
        {
            "names": [
                {
                    "title": "WEB DEVELOPMENT",
                    "cid": "4735"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "Board & UC Approval Pending",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "In this course students will take a project-based approach to learning the basics of full-stack Web development. Topics \ninclude how the internet works, http, building databases, version control, servers, the document object model (DOM), \nModel-View-Controller design pattern, coupled and decoupled applications, routing, API’s, and test-driven \ndevelopment. Languages, modules, libraries, frameworks, etc. are always evolving, but this course will include the \nfollowing (or an analogue to the following): HTML, CSS, JavaScript, jQuery, Ajax, SQL, Active Record, Ruby, Sinatra, \nand Ruby on Rails.",
            "hw": "1-1.5 hours per week",
            "recCourses": "Successful completion of Functional and Object-Oriented Programming or permission of instructor",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED AUTHENTIC RESEARCH (AAR)",
                    "cid": "8429"
                },
                {
                    "title": "ADVANCED AUTHENTIC RESEARCH (AAR)*",
                    "cid": "8429D"
                },
                {
                    "title": "ADVANCED AUTHENTIC RESEARCH (AAR)**",
                    "cid": "8429SJ"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "CAREER TECHNICAL EDUCATION (CTE)",
            "description": "The Advanced Authentic Research (AAR) Program is a unique opportunity for students in grades 10-12. It is designed \nfor students with interest, passion, curiosity, and perseverance to investigate an authentic topic of their choosing. In \nthis year-long course, students develop an original research question and devise a year-long project, culminating in a \nresearch paper and a community presentation. Students are supported by a process-oriented curriculum developed \nby the AAR team and are encouraged to develop a mentorship with an industry expert. The recursive nature of the \nresearch process allows students to go back and forth between the different stages of inquiry as they encounter new \ninformation. This course can satisfy the Career Technical Education graduation requirement. \nFor more information, please visit http://aar.pausd.org",
            "hw": "3-4 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ],
            "notes": [
                "Dual Enrollment Course Option: This course has a college-level, dual enrollment course option. Sign up for 8429D. You will be enrolled both at Gunn and Foothill College. This means, if you decide to drop the class, you will need to consider the deadlines and consequences for doing so at each institution. In addition to 5 units of high school credit per semester, students will also earn college units of CSU transferable college credit through Foothill CSU Transferable Credit College. Transferable college courses receive an additional grade point in the weighted GPA grade calculation as they are considered Honors-level work. Please note this year-long Gunn dual enrollment course includes six separate courses at Foothill over one academic year, which are not repeatable",
                "LINC 66C – 2 quarter CSU transferable units",
                "LINC 77A – 2 quarter CSU transferable units",
                "LINC 63 – 1 quarter CSU transferable units",
                "LINC 90C – 2 quarter CSU transferable units",
                "LINC 58 – 2 quarter CSU transferable units",
                "LINC 66E – 1 quarter CSU transferable units"
            ]
        },
        {
            "names": [
                {
                    "title": "CONTEMPORARY WRITERS",
                    "cid": "1190"
                }
            ],
            "grades": [
                9,
                10
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course is for students who want a college prep program in high school English and uses the works and ideas of \nmodern writers such as Harper Lee, Khaled Hosseini, and Julia Alvarez as the focus for studying literature and \ncomposition at the high school level. Because it is a required course, it includes particular emphasis on instruction in \nreading and writing. One semester of this course or Contemporary Heritage is required for graduation.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6"
            ],
            "notes": [
                "This class is a College Prep Class"
            ]
        },
        {
            "names": [
                {
                    "title": "CONTEMPORARY HERITAGE",
                    "cid": "1191"
                },
                {
                    "title": "CONTEMPORARY HERITAGE SLC*",
                    "cid": "9409"
                }
            ],
            "grades": [
                9,
                10
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course is for students who want an advanced program in high school English and uses the work of modern writers \nsuch as Harper Lee, Khaled Hosseini, Charles Dickens, and Julia Alvarez to explore the sources of contemporary trends \nand thought in literature and composition. Because this is a required course, it includes particular emphasis on \ninstruction in reading and writing. One semester of this course or Contemporary Writers is required for graduation.",
            "hw": "Surveyed students reported 2-3 hours per week",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6"
            ],
            "notes": [
                "This class is an Advanced Class"
            ]
        },
        {
            "names": [
                {
                    "title": "WRITER’S VOICE",
                    "cid": "1192"
                }
            ],
            "grades": [
                9,
                10
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This college prep course introduces students to the writer’s choices for communicating a message through the variety \nof literary types: a Shakespearean drama, a memoir, short stories, poetry, and a novel. Because it is a required course, \nthe works provide the resources for particular emphasis on instruction in reading and literature, writing and \ncomposition. One semester of this course or Literary Style is required for graduation.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "LITERARY STYLE",
                    "cid": "1193"
                },
                {
                    "title": "LITERARY STYLE SLC*",
                    "cid": "9410"
                }
            ],
            "grades": [
                9,
                10
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course introduces students in an advanced English program to the writer’s options in literary genres such as \ndrama, memoir, short story, novel, and poetry. Because it is a required course, the works of writers such as \nShakespeare, Golding, and Angelou provide the resources for particular emphasis on instruction in reading and \nliterature, writing and composition. One semester of this course or Writer’s Voice is required for graduation.",
            "hw": "Surveyed students reported 2-3 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AMERICAN LITERATURE",
                    "cid": "1263"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This college prep course for students uses the works of important American writers such as Fitzgerald, Steinbeck, \nMorrison, and Tan as the focus for studying the composition and literature as well as American thought and values. \nBecause it is a required course, it includes a particular emphasis on instruction in reading and writing. One semester \nof this course or American Classics H is required for graduation.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This class is a College Prep Class"
            ]
        },
        {
            "names": [
                {
                    "title": "AMERICAN CLASSICS H",
                    "cid": "1309"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This advanced course for students uses the works of major American writers such as Fitzgerald, Steinbeck, Morrison, \nand Tan as the source of studying composition and literature as well as American thought, culture, and values. As a \nrequired course, it includes a particular emphasis on instruction in reading and writing. One semester of this course \nor American Literature is required for graduation.",
            "hw": "Surveyed students reported 2-3 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This class is an Honors Class ENGLISH ELECTIVE COURSES These courses are open only to juniors and seniors, may not be repeated for credit, and will be offered annually only if there is sufficient enrollment. All electives meet the UC specifications for a significant reading and writing component unless otherwise indicated."
            ]
        },
        {
            "names": [
                {
                    "title": "ANALYTIC COLLEGE WRITING",
                    "cid": "1525"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course focuses on preparation for college and beyond. Instruction centers on the requisite skills: critical thinking \n(reading comprehension), vocabulary development, sentence completion techniques, effective timed essay writing, \nand thorough teaching of grammar in order to prepare students for success in college, from the application process \nthrough degree attainment. Fiction and informational text studied and analyzed, in preparation for weekly writings \nand composition. In addition to grammar, vocabulary, writing, and test preparation, this course also works on the \nwriting and completion of the college essay, research and writing a college search, research and writing a scholarship \nsearch, and resume building for jobs and internships, including interview skills and assessment. There is an emphasis \non instruction in reading and literature, writing and composition.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Open to both 11th and 12th graders",
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "THE WORKS OF SHAKESPEARE",
                    "cid": "1364"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "Afraid of being called a “beetle-headed, flap-ear’d knave“? Learn the language to fight back. This course introduces \nthe students to the range of Shakespeare's plays, including comedies, tragedies and histories, and to his sonnets. The \ncourse will also introduce students to Shakespeare’s language and times. Students need not be experts in Shakespearean \nplays to enroll in the course. Experts and novices alike are welcome.",
            "hw": "3 hours a week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "ESCAPE LITERATURE",
                    "cid": "1384"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course explores three of the most popular forms of modern fiction—mystery, science fiction and horror. From \nthe clever antics of Sherlock Holmes to the dark crevices of Dr. Frankenstein’s lab, students will get a taste for both the \ngroundbreaking works of each form, as well as offerings from modern day writers. We will do both expository and \ncreative writing and a variety of individual and group projects related to the stories and books we read.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "CLASSIC MYTHOLOGY",
                    "cid": "1469"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "The mythology and literature of ancient Greece and Rome is the focus of this multidisciplinary elective for juniors and \nseniors. The course will touch on the essentials – the gods of Mt. Olympus, the heroes who carried out amazing feats, \nand the many stories of tragedy, love, humor and adventure. Students will read both ancient and modern versions of \nthe myths and demonstrate their knowledge through a mix of writing, visual arts, performance and research-based \nactivities.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "DRAMATIC LITERATURE IN PERFORMANCE*",
                    "cid": "1203"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This interdisciplinary course for juniors and seniors offers students five units of English and five units of Drama credit. \nStudents will enrich their study of a variety of plays as literary texts with hands-on experiences involving every facet \nof creating the \"living\" play. Students need not have extensive acting experience. Offered in alternate years.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6"
            ],
            "notes": [
                "Students must be concurrently enrolled in Theatre 3 (1076) or Theater 4 (1097)"
            ]
        },
        {
            "names": [
                {
                    "title": "FILM AS COMPOSITION AND LITERATURE",
                    "cid": "1332"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course relates composition in the motion picture to student reading and writing. It introduces the art and \ntechnique of film through a history of the film and a study of its genre and directors. Activities help the student explore \nfilm as art and as composition.",
            "hw": "1 hour a week, but can be more depending on major writing assignments",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course",
                "Not approved NCAA course"
            ]
        },
        {
            "names": [
                {
                    "title": "ANALYSIS OF THE WRITER’S CRAFT",
                    "cid": "7601"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "In this creative writing course, students will have the opportunity to write memoir, short fiction, and poetry, as well \nas to experiment with innovative forms. We will focus on developing a strong, authentic voice, developing scenes, and \nunderstanding effective structure. Students will write daily and will regularly share their work with other students. The \ncourse is recommended only for those who understand that the best writing comes from both creativity and discipline.",
            "hw": "Approximately two hours per week, but can be longer when students are working on stories. Surveyed students reported 1-2 hours per week.",
            "recCourses": "Successful completion of 9th and 10th grade UC Approved “b” courses; grades 11 and 12",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course",
                "Students wishing to continue their studies in English may re-enroll in this course for Elective credit"
            ]
        },
        {
            "names": [
                {
                    "title": "PHILOSOPHY THROUGH LITERATURE",
                    "cid": "1179"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "“Too often we enjoy the comfort of opinion without the discomfort of thought” – John F. Kennedy \nOver the course of the semester, we will explore nearly three thousand years of humanity’s most pressing questions: \nWhat is real? Do we have free will? What is the meaning of life? Can we create a just society? In this case we will use a \nwide range of literature and primary sources ranging from Plato’s Allegory of the Cave to Descartes’ Meditations to \nHermann Hesse’s Siddhartha. Students will discuss, debate, and write their own philosophies on life and the world \naround them.",
            "hw": "1-3 hours a week, depending on major writing assignments. Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "AP ENGLISH LITERATURE & COMPOSITION",
                    "cid": "1279"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This advanced study course is open to seniors who have successfully completed three years of English credit (UC “b” \ncategory). The focus is on college-level work in reading and writing, culminating in preparation for the Advanced \nPlacement Examination in English Literature and Composition. Accepting enrollment in this course indicates a student’s \ncommitment to taking the AP Examination in Literature and Composition in the spring. Students wishing to move from \nAP English to World Classics 11H or World Literature must do so within the first 4 weeks of first semester.",
            "hw": "Surveyed students reported 3-4 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is an Advanced Placement course"
            ]
        },
        {
            "names": [
                {
                    "title": "READING BETWEEN THE LINES",
                    "cid": "1521"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course is designed for the college-bound student who wants to strengthen reading, writing and critical thinking \nskills in preparation for university-level demands. Since the course was designed to mesh with The Expository Reading \nand Writing Course, the majority of our reading will be non-fiction texts drawn from a variety of disciplines. We also \nexplore contemporary plays about global issues, make space for free reading assignments, and include a creative \nwriting unit in which students convey their learning across the disciplines through narrative. We do most of our \nreading outside of class, with a focus on developing strategies to help students understand even the most difficult \ncontent and text structures. During class meetings we have lively discussions, play-reading time, and instruction in \nargumentative writing. By the end of the course, students will read more widely, more skillfully, and with more \nenjoyment than before.",
            "hw": "4 hours a week, with 3 of those hours dedicated to outside of class reading time. Surveyed students reported 3-4 hours per week.",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "EXPOSITORY READING & WRITING COURSE",
                    "cid": "7650"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "Designed by CSU, the grade 12 Expository Reading and Writing Course (ERWC) is a yearlong course employing a \nrhetorical, inquiry-based approach that fosters critical thinking, student agency, and metacognition. The course \nincludes five to six full-length modules drawn from three categories: 1) Shakespeare drama; 2) full-length books; and \n3) contemporary issues (three to four modules). In addition, the course includes two short portfolio modules and at \nleast three mini-modules that address transferable skills applicable to conceptual development and practice across all \nmodules, e.g., genre awareness, goal setting and self-assessment, rhetorical situation, Aristotelian appeals. The core \nstructure of all the modules – the assignment Template – progresses along an “arc” from reading rhetorically \n(preparing to read, reading purposefully, and questioning the text) to preparing to respond (discovering what you \nthink) to writing rhetorically (composing a draft, revising rhetorically, and editing).",
            "hw": "2 hours a week, with 1 of those hours dedicated to reading",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "THE ART OF VISUAL STORYTELLING",
                    "cid": "1522"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This course introduces students to a unique literary medium: comics! After mastering the basic terms for visual \nstorytelling composition, the students will dive into contemporary works and analyze how the combination of art and \nwords impact character development and the structure of the text. We will examine how the comic format can be \nutilized for sensitive subject matter such as Holocaust survivor narratives. Students will explore the development of \nsuperhero stories and discover the impact of other literary genres on superhero texts. Finally, we will delve into manga \nin order to compare and contrast Eastern and Western styles.",
            "hw": "Surveyed students reported 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AMERICAN STUDIES*",
                    "cid": "1288"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This yearlong interdisciplinary course for 11\nth\n graders combines the study of U.S. History and American Literature. In \nthis course, students will explore American culture and history through the use of historical documents and readings \nfrom a wide range of classic authors, from F. Scott Fitzgerald to Toni Morrison. In addition, the course incorporates \nthe art, music, film, fashion, and popular culture of the 20th century in American society. Through field trips, students \n\nhave the opportunity to explore the rich history of the Bay Area. American Studies offers five units of U.S. History \nand five units of English credit per semester. Students must enroll in American Studies for both U.S. History and \nEnglish.",
            "hw": "2-3.5 hours a week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "WOMEN WRITERS*",
                    "cid": "1314"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "This one-semester course is open to juniors and seniors as an interdisciplinary History and English elective. We will \nlook at the history of women in America as it plays out in both historical and literary contexts. Students will understand \nwhat led to the women’s movement, particularly in America, and study current female perspectives via nonfiction and \nfiction. A goal of this course is to present women’s history and literature as important components of United States \nculture and as a unique subject of study.",
            "hw": "2 hours a week, per class",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "This class is a College Prep Class"
            ]
        },
        {
            "names": [
                {
                    "title": "LITERATURE OF SPORTS",
                    "cid": "1350"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “b”",
            "section": "ENGLISH",
            "description": "A college preparatory course, the Literature of Sport will help students analyze, investigate and study, from a literary \nperspective, the unique phenomenon of participatory and competitive sport in America. Specific attention will be paid \nto the parallels that exist between professional and amateur sports, as well as their accompanying sociological changes. \nStudents will study all portions of the literary spectrum (novel, non-fiction, essay, short story, poem, and film) to \nexplore a wide panorama of opinions, themes, observations, and social commentary related to sport. While developing \nanalytical and writing skills, students will formulate ideas on this distinct genre through numerous compatible \nassignments. A final project requiring research is required. 2-3 pages per writing assignment. Emphasis: \nContemporary sports writing and research, as well as sports journalism. Estimated Time Spent on Homework: 2-3 \nhours/week",
            "hw": "Surveyed students reported 2-3 hours per week",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "WORLD HISTORY",
                    "cid": "1625"
                },
                {
                    "title": "WORLD HISTORY SLC*",
                    "cid": "9343"
                }
            ],
            "grades": [
                9
            ],
            "length": "Year",
            "credit": "UC Approved “a”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "World History covers important historical events in the world, from the Age of Enlightenment through the birth of \nthe Cold War. The content focuses on major historical eras and impacts such as: The Age of Absolutism, World War \nOne and World War Two. Special attention is given to the social, political and economic developments as a result of \nall of these major eras.",
            "hw": "Approximately 2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ],
            "notes": [
                "This is the Small Learning Community (SLC) section of the World History class. Please see page 84 for a description of the SLC program."
            ]
        },
        {
            "names": [
                {
                    "title": "CONTEMPORARY WORLD HISTORY",
                    "cid": "1641"
                },
                {
                    "title": "CONTEMPORARY WORLD HISTORY*",
                    "cid": "1641SJ"
                }
            ],
            "grades": [
                10
            ],
            "length": "Semester",
            "credit": "UC Approved “a”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "In this course, concepts from the social sciences are used to explore contemporary global issues. Special emphasis is \ngiven to non-Western regions, especially Africa, Latin America, and the Middle East and Asia.",
            "hw": "Approximately 2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "US GOVERNMENT",
                    "cid": "1753"
                },
                {
                    "title": "US GOVERNMENT*",
                    "cid": "1753SJ"
                }
            ],
            "grades": [
                10
            ],
            "length": "Semester",
            "credit": "UC Approved “a”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This one-semester course explores the constitutional foundations of American government, the decision-making \nprocesses within and between the legislative, executive, and judicial branches of government and the changes which \nhave occurred over time. Our rights and responsibilities as American citizens are also stressed together with the \nelectoral process and issues of politics and the media.",
            "hw": "Approximately 2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ],
            "notes": [
                "1753SJ is for students in the Social Justice Pathway. Please see page 87 for a description of the Social Justice Pathway program."
            ]
        },
        {
            "names": [
                {
                    "title": "UNITED STATES HISTORY",
                    "cid": "1686"
                },
                {
                    "title": "UNITED STATES HISTORY*",
                    "cid": "1686SJ"
                }
            ],
            "grades": [
                11
            ],
            "length": "Year",
            "credit": "UC Approved “a”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This class begins with a review of pre-Civil War America, but its main emphasis is on the period following the Civil \nWar through the present day. The content focuses on major turning points in US history, primarily social, political, \nand economic themes.",
            "hw": "Approximately 2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ],
            "notes": [
                "1686SJ is for students in the Social Justice Pathway. Please see page 86 for a description of the Social Justice Pathway program."
            ]
        },
        {
            "names": [
                {
                    "title": "AP US HISTORY",
                    "cid": "1699"
                }
            ],
            "grades": [
                11
            ],
            "length": "Year",
            "credit": "UC Approved “a”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This course provides an in-depth survey of US History, including intellectual, political, cultural, social, and diplomatic \nhistory. The class format focuses on writing and large and small group discussions, as well as lectures and primary \nsource analysis. It also includes independent research, debates, and guest speakers. In addition to the text, each student \nwill read a variety of books on historical topics and issues. Students are encouraged to take the AP test in May for \ncollege credit. Summer reading is expected.",
            "hw": "Approximately 5 hours per week (with possibly more in the 3 weeks before the AP test)",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ECONOMICS",
                    "cid": "1815"
                },
                {
                    "title": "ECONOMICS*",
                    "cid": "1815SJ"
                }
            ],
            "grades": [
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This one-semester course covers basic micro and macroeconomic theory, including supply and demand theory, \nmarket structures, the role of government in the economy, and issues of economic development. While the emphasis \nis primarily on the United States economy and an introduction to business, the analytical skills needed to be an \neducated consumer in a global economy are also stressed.",
            "hw": "Approximately 1-2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ],
            "notes": [
                "1815SJ is for students in the Social Justice Pathway. Please see page 87 for a description of the Social Justice Pathway program."
            ]
        },
        {
            "names": [
                {
                    "title": "PSYCHOLOGY",
                    "cid": "1842"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This one-semester course introduces the student to the science of human behavior and mental processes. It explores \nthe biological roots of behavior and such concepts as learning and development, neuroscience, perception and \nsensation, disorders, and states of consciousness.",
            "hw": "Approximately 2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AP PSYCHOLOGY",
                    "cid": "1859"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This college-level introductory course will cover the many facets of the science of psychology, including biological \nroots of behavior, learning, thinking and language, developmental and abnormal psychology, personality theory and \nresearch methodology. Students are encouraged to take the AP test in May for college credit.",
            "hw": "Approximately 3-5 hours per week (with possibly more in the 3 weeks before the AP test and before major tests)",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AP ECONOMICS (MICRO & MACRO)",
                    "cid": "1811"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "The course will follow the syllabus approved by the College Board. The first semester's work will focus on \nmicroeconomics. The second semester will cover macroeconomics. Students are encouraged to take the AP \nexaminations in micro and macroeconomics.",
            "hw": "Approximately 0-3 hours per week (with possibly more prior to the AP exams)",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "POSITIVE PSYCHOLOGY",
                    "cid": "1847"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "Positive psychology is a recent branch of psychology that stems from Humanistic Psychology. Its aim is \"to find and \nnurture genius and talent\" (Compton 2005), and “to make normal life more fulfilling.” Students will be exposed to the \ntheoretical pillars of this discipline and will apply this theory to their own life. Through a series of in class and at home \nactivities, students will not only grow academically but personally as well. Students who have taken positive \npsychology and personal empowerment classes in the past have reported a significant increase in positive self-image, \nfocus, creativity, curiosity, and general level of happiness.",
            "hw": "Approximately 0-3 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "US FOREIGN POLICY HONORS",
                    "cid": "1769"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This one-semester course is designed to help students better understand US foreign policy. The course will begin with \na very brief review of the Cold War and then continue with case studies and history of US policy in Central America, \nEastern Europe and the former USSR, the Middle East, Africa, and Asia. Some of the questions we will examine \ninclude: Is there a “New World Order”? To what degree can or should we depend upon alliances to steer policy \ndecisions in the future? What values and interests should be reflected in the foreign policy we create for an increasingly \ninterdependent world? There are no unit exams; assessment is based upon policy papers, presentations and seminar \nparticipation for each unit.",
            "hw": "2-3 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AP HUMAN GEOGRAPHY",
                    "cid": "1762"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approval Pending",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "The AP Human Geography course introduces students to the systematic study of patterns and processes that have \nshaped human understanding, use, and alteration of Earth’s surface. Students learn to employ spatial concepts and \nlandscape analysis to examine human socioeconomic organization and its environmental consequences. They also \nlearn about the methods and tools geographers use in their research and applications.",
            "hw": "Approximately 3-5 hours per week (with possibly more in the 3 weeks before the AP test and before major tests)"
        },
        {
            "names": [
                {
                    "title": "ETHNIC STUDIES",
                    "cid": "1953"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "Ethnic Studies courses operate from the consideration that race and racism, have been, and continue to be, profoundly \npowerful social and cultural forces in American society. The class will examine California as a microcosm of the United \nStates and focus on themes of social justice, social responsibility, and social change. \nEthnic Studies will use primary and secondary sources, class discussion, and a research project as the basis for inquiry \ninto the issues that are raised in the essential question of this course: What is the role of ethnicity in the American \nExperience?",
            "hw": "1-2 hours per week.",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "HISTORY OF WOMEN IN AMERICA",
                    "cid": "1606"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “g”",
            "section": "HISTORY & SOCIAL SCIENCES",
            "description": "This one-semester course is open to juniors and seniors as an interdisciplinary History and English elective. We will \nlook at the history of women in America as it plays out in both historical and literary contexts. Students will understand \nwhat led to the women’s movement, particularly in America, and study current female perspectives via nonfiction and \nfiction. A goal of this course is to present women’s history and literature as important components of United States \nculture and as a unique subject of study.",
            "hw": "2 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "GEOMETRY",
                    "cid": "2357"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students study Euclidean Geometry including points, lines, angles, triangles, circles, polygons, solids, constructions, \ntransformations and are introduced to right triangle trigonometry. This course includes deductive reasoning and two-\ncolumn proofs. It emphasizes transformational geometry and embeds algebra review all year. Students are also \nintroduced to geometric probability.",
            "prereqs": "Successful completion of Algebra",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self-report spending an average of 1.5 hours a week outside of school on this course",
                "This is a college prep course for 10th grade students or older"
            ]
        },
        {
            "names": [
                {
                    "title": "GEOMETRY A",
                    "cid": "2358"
                }
            ],
            "grades": [
                9,
                10
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "In addition to the objectives of the Geometry curriculum, analytic geometry and transformations are studied in greater \ndepth. Students also begin an extensive inferential logic unit. Students are expected to work more independently, have \nstrong algebra skills and solve more challenging problems in this course, compared with college prep Geometry.",
            "prereqs": "Successful completion of Algebra; open to grades 9 and 10",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self-report spending an average of 2.5 hours a week outside of school on this course",
                "This is an advanced course"
            ]
        },
        {
            "names": [
                {
                    "title": "GEOMETRY H",
                    "cid": "2408"
                }
            ],
            "grades": [
                9
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "In addition to the objectives of the Geometry A curriculum, students study an extensive inferential logic unit including \ntruth validity and tautologies, complete conditional, direct and indirect proofs. Students are expected to be highly \nmotivated to learn about mathematics and have exceptional algebra skills. Students are regularly exposed to \nchallenging, multi-step and non-routine problems.",
            "prereqs": "Successful completion of an Algebra course; open to grade 9",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self-report spending an average of 2.5 hours a week outside of school on this course",
                "This is an honors course"
            ]
        },
        {
            "names": [
                {
                    "title": "ALGEBRA 2",
                    "cid": "2380"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students study families of functions including: linear, quadratic, polynomial, exponential, logarithmic, rational, and \nradical functions. Students extend the domain of trigonometric functions using the unit circle and model periodic \nphenomena with trigonometric functions. Other topics include: complex numbers, interpreting \ncategorical/quantitative data and using regression to interpret data. A graphing calculator is encouraged but not \nrequired for this course. Students will learn enough trigonometry in this class to be prepared to take AP Physics 1 the \nfollowing year.",
            "prereqs": "Successful completion of an Algebra course and a Geometry course; open to grades 10, 11 and 12",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self -report spending an average of 1 hour a week outside of school on this course",
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "ALGEBRA 2 / TRIGONOMETRY A",
                    "cid": "2365"
                }
            ],
            "grades": [
                10,
                11
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "In addition to the objectives of the Algebra 2 curriculum, students study circular trigonometry in greater depth \nincluding trig identities, trigonometric applications, and solving trigonometric equations. Basic counting principles \nare introduced. A graphing calculator is required for this course.",
            "prereqs": "Successful completion of an Algebra course and a Geometry course; open to grades 10 and 11",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students self-report spending an average of 2 hours a week outside of school on this course",
                "This is an advanced course"
            ]
        },
        {
            "names": [
                {
                    "title": "ALGEBRA 2 / TRIGONOMETRY H",
                    "cid": "2416"
                }
            ],
            "grades": [
                9,
                10
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "This course covers content similar to Alg2/TrigA but with a greater emphasis on proof and problem solving. In each \nunit, students are expected to apply their understanding of the content to solve problems that are similar but not \nidentical to problems solved in class. Additional content includes an in-depth study of conic sections, as well as \narithmetic and geometric sequences and series, law of sines and cosines, and vectors.",
            "prereqs": "Successful completion of an introductory Algebra course and a Geometry course; open to grades 9 and 10",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students self-report spending an average of 2.5 hours a week outside of school on this course",
                "This is an honors course"
            ]
        },
        {
            "names": [
                {
                    "title": "PRE-CALCULUS",
                    "cid": "2371"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students review exponential, logarithmic and rational functions and study trigonometry including trigonometric \nidentities, law of sines and cosines, trigonometric applications and solving trigonometric equations. \nAdditional topics include vectors, parametric and polar functions, matrices, sequence and series and an introduction \nto limits and calculus. This class is meant to prepare a student for a formal class in Calculus.",
            "prereqs": "Successful completion of Algebra 2; open to grades 11 and 12",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self-report spending an average of 1.5 hours a week outside of school on this course",
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "INTRODUCTION TO DATA SCIENCE",
                    "cid": "2451"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "In this course students will learn to understand, ask questions of, and represent data through project-based units. The \nunits will give students opportunities to be data explorers through active engagement, developing their understanding \nof data analysis, sampling, correlation/causation, bias and uncertainty, modeling with data, making and evaluating \ndata-based arguments, and the importance of data in society.",
            "prereqs": "Successful completion of a Geometry and Algebra 2 course",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "May not be taken in conjunction with another math class",
                "Students self-report spending an average of 1-2 hours a week outside of school on this course",
                "This is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "INTRODUCTION TO ANALYSIS & CALCULUS",
                    "cid": "2385"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students will build on their knowledge of functions and explore new topics including: vectors, polar functions, logistic \nfunctions, parametric functions, probability, combinatorics, matrices, sequences, series, and statistics. The fourth \nquarter of the year will focus on limits and an introduction of calculus including the derivative. A graphing calculator \nis required.",
            "prereqs": "Successful completion of Algebra 2 and a complete Trigonometry course; open to grades 11 and 12",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self-report spending an average of 1-2 hours a week outside of school on this course",
                "This is an advanced course"
            ]
        },
        {
            "names": [
                {
                    "title": "ANALYSIS H",
                    "cid": "2399"
                }
            ],
            "grades": [
                10,
                11
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "In addition to the objectives of IAC course, students study Group Theory, Algebraic Problem Solving, quadric surfaces, \nand more applications of matrices, such as transformations and Markov Chains. The course concludes with the “A” \nportion of calculus including limits, difference quotients, derivatives and an introduction to the indefinite integral. A \ngraphing calculator is required.",
            "prereqs": "Successful completion of Algebra 2 and a complete Trigonometry course; open to grades 10 and 11. Students laning up from Alg2/TrigA will require summer work to be prepared.",
            "slos": [
                "1",
                "2",
                "5",
                "6"
            ],
            "notes": [
                "Students self-report spending an average of 3.5 hours a week outside of school on this course",
                "This is an honors course"
            ]
        },
        {
            "names": [
                {
                    "title": "AP AB CALCULUS",
                    "cid": "2449"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students study the equivalent of the first semester of a yearlong college calculus course. Students develop their \nunderstanding of limit, derivative, definite integral, and the indefinite integral. Students represent their work \nalgebraically, graphically, numerically and verbally. A graphing calculator is required for this course. Students may \nchoose to take the Advanced Placement Exam in Calculus AB.",
            "prereqs": "Successful completion of Pre-Calculus, Introductory Analysis and Calculus, or Analysis Honors; open to grade 12",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students self -report spending an average of 1.5 hours a week outside of school on this course",
                "This is an advanced placement course"
            ]
        },
        {
            "names": [
                {
                    "title": "AP BC CALCULUS",
                    "cid": "2459"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students complete the study of a yearlong college calculus course that was started in Analysis H. The course content \nincludes: functions and limits, derivatives of algebraic functions, the definite and indefinite integral, area, volumes of \nrevolution, differentiation of exponential, logarithmic, trigonometric and inverse trigonometric functions, methods \nof integration, infinite series, simple differential equations, vectors and applications. A graphing calculator is required \nfor this course. Students may choose to take the Advanced Placement Exam in Calculus BC.",
            "prereqs": "Successful completion of Analysis Honors; open to grades 11 and 12",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students self-report spending an average of 2.5 hours a week outside of school on this course",
                "This is an advanced placement course"
            ]
        },
        {
            "names": [
                {
                    "title": "APPLIED MATH H",
                    "cid": "2450H"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "Students will learn and apply a variety of mathematical methods to analyze and solve problems in business, applied \nscience, engineering, sports, and everyday life. We’ll use math to answer questions like “How could TSA better avoid \nbottlenecks at airports?”, “How big a mortgage should you take out on your first home?”, and “Should NBA teams \nshoot more 2 or 3-pointers?”. Emphasis will be on hands-on, project-based learning. \nTopics of study include Linear Programming, Decision Trees, Financial Analysis, Queuing, Game Theory, and \nApplied Statistics.",
            "prereqs": "Successful completion of Pre-calc/IAC/Analysis OR concurrent enrollment in Analysis OR a recommendation from a math teacher",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students self-report spending an average of 1 hour a week outside of school on this course"
            ]
        },
        {
            "names": [
                {
                    "title": "AP STATISTICS",
                    "cid": "2319"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “c”",
            "section": "MATHEMATICS",
            "description": "The objective of this course is to provide students with the equivalent of an introductory college-level statistics course. \nCourse content involves exploratory data analysis, experimental and survey design, the study of random variables \n(including some probability theory), and inferential statistics for one and two variables. Graphing calculators and \ncomputers will be used extensively as an aide to statistical analysis. During second semester, students will also be \nexpected to read excerpts from “The Signal and the Noise” by Nate Silver, and write a short summary about the \nconnections between the book and the course. Students may choose to take the Advanced Placement Exam in \nStatistics. There is a group project during each quarter and students should expect to complete some project work \noutside of class.",
            "prereqs": "Successful completion of Algebra 2; open to grades 11 and 12",
            "slos": [
                "1",
                "2",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "Students self -report spending an average of 2.5 hours a week outside of school on this course",
                "This is an advanced placement course and may be taken concurrently with another math class"
            ]
        },
        {
            "names": [
                {
                    "title": "YOGA & MINDFULNESS",
                    "cid": "2759"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "PHYSICAL EDUCATION",
            "description": "Students will begin the course by taking an overall assessment of their current emotional and physical fitness as well \nas set goals for improvement. Students learn a series of yoga postures and philosophy which will help promote \nstrength, flexibility and cardiorespiratory health. Students will begin to appreciate the body, mind, and breath \nconnection and how regular yoga and journaling practice provides balance of these. Course will have adjustable \nassignments so that students may take the class multiple times. Daily cardiovascular exercise will be included with \nthis class and students may not be on a sports team and receive a prep/study period for this class.",
            "hw": "Less than 1 hour per week",
            "slos": [
                "A1",
                "A2",
                "B1",
                "E4"
            ],
            "notes": [
                "CCSS Addressed in this Course: Effective communication through listening, speaking and writing; Reading with understanding; Critical and creative thinking to solve problems"
            ]
        },
        {
            "names": [
                {
                    "title": "ATHLETIC CONDITIONING",
                    "cid": "2795"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "PHYSICAL EDUCATION",
            "description": "This course is designed to help the athlete maintain his/her body conditioning, but is open to all students wishing to \nfocus on improving their overall fitness and conditioning. Activities include but are not limited to: strength and \nendurance training in the weight room, cardiovascular training through form running, flexibility through tumbling, \nPilates, and plyometrics. Instructor will also address aspects of self-defense. There will be a strong emphasis on sports \npsychology concepts. Note that this course is physically challenging and more rigorous than regular Physical \nEducation classes. Athletes are encouraged to enroll in Athletic Conditioning.",
            "hw": "Up to 1 hour per week",
            "slos": [
                "1",
                "2",
                "5"
            ]
        },
        {
            "names": [
                {
                    "title": "DANCE 1",
                    "cid": "2731"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "PHYSICAL EDUCATION",
            "description": "Students in Dance 1 will learn the beginning techniques of hip hop, jazz, modern and tap, and will have exposure to \nvarious traditional ethnic and contemporary dance forms. Students will develop a vocabulary of dance and an \nunderstanding of line and spatial design. Dance technique and combinations will be taught. Basic dance history, \nchoreography, and audition technique are covered along with performance skills. No PE Prep given to athletes for this \ncourse.",
            "hw": "Up to 1 hour per week",
            "slos": [
                "1",
                "2",
                "5"
            ]
        },
        {
            "names": [
                {
                    "title": "UNITY PE",
                    "cid": "2769"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "PHYSICAL EDUCATION",
            "description": "Gain your general Physical Education credit while also developing important communication and leadership skills \nrequired to work successfully with students and peers of all abilities. \nThis class is for 10th -12th grade students and is developed around the State Physical Education Framework and \nStatewide Standards for PE (HS Course 2). It is an inclusion class that will meet the standards by reaching each and \nevery student and their unique needs, with a focus on all students succeeding. Get your PE credit and make new \nfriendships and connections along the way. \n Students who are not in the Futures program will be eligible for community service hours.",
            "hw": "Up to 1 hour per week",
            "slos": [
                "1",
                "2",
                "5"
            ]
        },
        {
            "names": [
                {
                    "title": "INDEPENDENT STUDY PHYSICAL EDUCATION",
                    "cid": "2752"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "PHYSICAL EDUCATION",
            "description": "The purpose of Independent Study Physical Education (ISPE) is to provide options for students to engage in alternative \npathways for which they can receive physical education credit towards graduation. Freshmen are not eligible – this is \nto ensure that all students are exposed to a well-rounded Physical Education curriculum and participate in a series of \nstate-mandated physical performance tests later in ninth grade. This program allows up to one of those years to be \ntaken as Independent Study for students participating in sports not offered at PAUSD high schools. Permission is \ngranted one semester at a time. Continuation in the course for a second semester may be requested by the student and \nmay granted by the instructor at the teacher’s discretion. \nEligibility\trequirements\tare: (1) The student must have completed and passed 9th grade PE and be a 10th, 11th \nor 12th grader, (2) the student must have met 5 of 6 fitness standards during 9th grade PE as determined by California \nFitness test, (3) the sport/activity is not offered at Gunn, (4) the activity will occur under the supervision of a \nSupervising Instructor/Coach who has the appropriate training and expertise to provide the level of instruction \nrequired for the activity, (5) the student has a minimum of three years’ prior experience in the activity. Qualifying \nexperience is year-round instruction/training on a 5-6 days per week average, 6) The activity involves skill \nimprovement sessions 5-6 days per week, Student practices/trains a minimum of 15 hours per week under appropriate \nsupervision of a qualified Instructor/Coach. \nThe application Packet with pages 1-3, 6 and 7 must be returned along with evidence to the Physical Education \nInstructional Supervisor, before the second Friday of each semester to be eligible. \nFurther information and the instructional packet can be found on our Gunn Physical Education website.",
            "hw": "Up to an hour per week",
            "slos": [
                "1",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "BIOLOGY",
                    "cid": "3130"
                },
                {
                    "title": "BIOLOGY SLC*",
                    "cid": "3216"
                },
                {
                    "title": "BIOLOGY H",
                    "cid": "3131"
                }
            ],
            "grades": [
                9
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "Units of study include Evolution, Cells to Organism, Genetics and Biotechnology, and Ecology. Topics will be \ndeveloped through the use of the NGSS Science and Engineering Practices. Emphasis will be placed on developing \nscience skills, including developing and using models, planning and carrying out investigations, analyzing and \ninterpreting data, and engaging in argument from evidence. \n*Biology SLC is the section of Biology that is integrated into the Small Learning Community program. See page 86 for \na description of the Small Learning Community program. \nBio H does not earn a weighted grade from the University of California. \nFor additional information, please visit:\nhttps://hs-articulation.ucop.edu/agcourselist/institution/2257",
            "hw": "Ranging from 1 to 5 hours uninterrupted time per week depending on course level. See “Predictors for Success in Each First-Year Biology Course” chart above.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ],
            "notes": [
                "This class is a college prep course"
            ]
        },
        {
            "names": [
                {
                    "title": "AP BIOLOGY",
                    "cid": "3139"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "This college-prep course is designed to provide a survey of biological knowledge at an introductory college level. \nBecause successful completion of the curriculum will enable students to take the College Board Advanced Placement \nExamination, the course follows the outline recommended by the College Board, covering the general content themes \nof: (1) Evolution; (2) Energy; (3) Information; and (4) Interactions. \nHeavy emphasis is placed on understanding the connection between experimentation and scientific discovery. Both \nhands-on laboratory activities and scientific readings are used to show how biological information is gained, \ninterpreted, and applied. Required homework includes extensive reading, activities, regular written lab reports, and \noccasional group projects.",
            "hw": "5-8 hours uninterrupted time per week",
            "prereqs": "Successful completion of a biology course. Successful completion of a first-year chemistry course at Gunn High School. (Exceptions must be approved by both the Science Department Instructional Supervisor and the Guidance Department.)",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "BIOTECHNOLOGY: THEORY & PRACTICES",
                    "cid": "3955"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "The course description for Biotechnology can be found in the CTE section of the catalog (page 21). \n \n \n\nMARINE BIOLOGY :: Marine Biology\n|\n3168 \nGrades 11-12 Year UC Approved “d” \n \nMarine Biology is a second-year biology college-prep course that builds upon and extends biological concepts \ndeveloped during the first year. Students will take an in-depth look at the features of the ocean and the variety of plant \nand animal life that lives within. They will investigate how life in the ocean is interconnected and the impact that \nhumans have on that system. Topics will be developed through laboratory exercises, discussions, lectures, \ndemonstrations, informational research projects, and field trips. Please note, this is a laboratory science class where \nscientific skills and methods (including data analysis and laboratory write-ups) will be emphasized.",
            "hw": "1 hour uninterrupted time per week",
            "prereqs": "Successful completion of Biology and a physical science course (Conceptual Physics, Astrophysics, Chemistry, Chemistry H, Physics)",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "CHEMISTRY",
                    "cid": "3624"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "Topics covered include atomic structure, nuclear chemistry, chemical nomenclature, periodic properties of elements, \nbonding, states of matter, gas laws, solutions chemistry, chemical reactions, thermodynamics and kinetics of reactions, \nchemical equilibrium, and acid-base reactions. (NOTE: Same topics as Chemistry Honors) \nThis college-prep course includes many laboratory experiments and demonstrations. Students learn how to work \nsafely in the laboratory, how to perform basic laboratory operations, how to organize and interpret data, and how to \ndraw conclusions from experimental results. \nChemistry is sufficient preparation for students wanting to take AP science courses that require a chemistry course as \na prerequisite. Chemistry Honors is not required.",
            "hw": "2-3 hours uninterrupted time per week (assigned homework",
            "prereqs": "Successful completion of a first-year biology course or the equivalent. Successful completion of an introductory algebra course, leading to a strong understanding of introductory algebra. Concurrent enrollment in or completion of a geometry course highly recommended. Consent of department required for exceptions.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "CHEMISTRY HONORS",
                    "cid": "3625"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "Chemistry Honors is not required for students wanting to take AP science courses; Chemistry is sufficient for this \npurpose. \nChemistry Honors covers all material that is covered in Chemistry, but with more depth and breadth. Topics like \nmolecular geometry, thermodynamics, kinetics, and dynamic equilibrium are covered in further detail. \nStudents should take Chemistry Honors if they have a strong interest in the sciences, prefer a high level of rigor in \ntheir studies, and are able to accommodate their schedules for a much more significant time commitment than \nChemistry would entail.",
            "hw": "3-4 hours uninterrupted time per week (assigned homework",
            "prereqs": "Successful completion of a first-year biology course or the equivalent. Successful completion of an introductory algebra course, leading to a very strong understanding of introductory algebra, including logarithms and scientific notation. Concurrent enrollment in a geometry class or completion of geometry highly recommended.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP CHEMISTRY",
                    "cid": "3609"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "This course will prepare students to take the AP Chemistry examination. \nLife is Chemistry! In general chemistry, much of what we learn is foundational, but this will not be your typical lecture-\nbased chemistry course. The educational philosophy behind the course lies in hands on learning, and inquiry, which \nwill challenge all types of learners. Therefore, students will be spending at least 40% of their time on laboratory work, \nsome of which may need to be completed outside of class. The expectations for this class are to have second-year \nchemistry students who are excited about learning chemistry, love being in lab, and are willing to work through \nchallenges. \nIMPORTANT NOTE: The AP Chemistry course is taught through lab performance and analysis. Students are \nrequired to utilize the knowledge taught in their first-year chemistry course, as that material will not be retaught.",
            "hw": "3 to 6 hours uninterrupted time per week",
            "prereqs": "Successful completion of Chemistry OR Chemistry H and a very strong understanding of first- year chemistry. Successful completion of a second-year algebra course (Alg 2 or higher). Students need a strong knowledge of Algebra 2 and a high confidence in problem-solving skills.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "CONCEPTUAL PHYSICS",
                    "cid": "3254"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "Conceptual Physics is a college-prep course that is intended to meet the needs of those students who are still developing \ntheir basic algebraic skills in a first-year algebra course. The course also has a little out-of-class time commitment that \ncould give students who do not have intentions of studying science in college a way to learn physics in a low-risk \nenvironment. It provides a rudimentary introduction to the fundamental principles of physics and how they apply to \nour daily lives. Topics covered include motion, forces, energy, waves, optics, electricity, and magnetism. Primary \nemphasis is placed on developing a conceptual understanding of topics, though simple mathematical formulas will be \nintroduced and used to augment their understanding of how nature works. In such cases, use of these formulas will \nsupport the development of algebraic skills and provide reinforcement for material covered in introductory algebra \ncourses.",
            "hw": "1 hour uninterrupted time per week",
            "prereqs": "Successful completion of a biology course. Successful completion of 1 year of algebra. Consent of department required for exceptions.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "PHYSICS",
                    "cid": "3820"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "The goal of Physics is to develop a conceptual and algebra-based understanding of the fundamental principles of \nphysics. In this college-prep course, students will explore these concepts in the laboratory and will apply them in \nproblem-solving situations and to explain physical phenomena in their daily lives. Students should be confident with \nthe knowledge and application of introductory algebra.",
            "hw": "1 to 2 hours uninterrupted time per week",
            "prereqs": "Open to grades 10, 11 and 12. Successful completion of Biology. A very strong understanding of introductory algebra. Concurrent enrollment in geometry or higher-level math.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP PHYSICS 1",
                    "cid": "3824"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "The course is designed to foster deeper conceptual understanding of physics topics through inquiry, quantitative data \nanalysis, and problem-solving. The course will teach students to relate conceptual and pictorial understanding to \nmathematical descriptions used in the practice of physics. Students will engage in scientific questioning and evidence-\nbased reasoning to guide their understanding of the content. \nThis course will also prepare students to take the AP Physics 1 exam.",
            "hw": "3 to 5 hours uninterrupted time per week",
            "prereqs": "Open to grades 11 and 12. Successful completion of any Biology course. Chemistry course recommended. Very strong knowledge of Algebra 2 and Trigonometry and a high confidence in problem- solving skills. Concurrent enrollment or successful completion of IAC, Analysis Honors, or Calculus.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP PHYSICS C: MECHANICS",
                    "cid": "3859A Semester 1"
                },
                {
                    "title": "AP PHYSICS C: E & M",
                    "cid": "3859E Semester 2"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Semester",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "Traditional AP Physics C is a calculus-based, college-level physics course taught at an accelerated pace. It is equivalent \nto a course taken by physics majors and engineers at most universities. Traditional AP Physics C concentrates on \nMechanics in the first semester and Electricity and Magnetism in the second semester. The course prepares students \nto take the two Advanced Placement physics examinations in both Mechanics and Electricity and Magnetism. \nStudents must sign up for both semesters\n. (Students who have previously taken Yearlong APC Mechanics (3859 Y) \nare able to sign up for second semester E&M (3859Y) only).",
            "hw": "4 to 7 hours uninterrupted time per week",
            "prereqs": "Open to grades 11 and 12. Concurrent enrollment or completion of a calculus course (BC Calculus recommended) and a high confidence in problem-solving skills. Previous physics course recommended.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP PHYSICS C: MECHANICS",
                    "cid": "3859Y"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "AP Physics C: Mechanics is a yearlong calculus-based, college-level physics course. It covers kinematics; Newton’s \nLaws of Motion; work, energy, power; systems of particles; circular motion and rotation; oscillations; and gravitation. \nThis course is founded on the “Big Ideas” of AP Physics C as articulated in the course and exam description published \nby the College Board. This course prepares students to take the Advanced Placement physics exam in Mechanics.",
            "hw": "3 to 6 hours per week",
            "prereqs": "Concurrent enrollment or successful completion of a calculus course. Previous completion of science requirements for graduation.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ASTROPHYSICS",
                    "cid": "6409"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "This course meets all graduation and university admission criteria for physical science. \nThis course is a hands-on, inquiry-based laboratory course that will introduce students to concepts in Astronomy \nwhile exploring the fundamental principles that govern the physical universe. The course will emphasize the processes \nof science including observation and experimentation, gathering and evaluating data, interpreting scientific data, \nsearching for patterns, developing and interpreting models, making conclusions based on evidence, and \ncommunication of scientific process, ideas and conclusions. The course will highlight the historical development of \nscientific thinking, cumulative nature of scientific evidence and the evolution of our current understanding of the \nphysical universe. The topics covered in this course include, the scientific process, celestial motions, history of \nAstronomy, planetary mechanics, the nature of light, telescopes, survey of the solar system, detail study of our Moon \nand Mars, our Sun as a star, properties of stars, stellar evolution, galaxies and cosmology.",
            "hw": "1 hour uninterrupted time per week",
            "prereqs": "Open to grades 10, 11 and 12. Successful completion of a biology course; successful completion of one year of algebra",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP ENVIRONMENTAL SCIENCE",
                    "cid": "3279"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "AP Environmental Science is a course structured to provide a survey of earth’s geology and history, its environmental \nprocesses, disturbances to these processes, impact of human population on the environment and governmental \nregulation of local and international environmental issues. \nThe course follows the outline recommended by the College Board and is designed to enable students to successfully \ntake the College Board Advanced Placement Examination. \nCourse content, laboratory activities, textbook assignments, activities and projects will all be carried through with the \nskill and content required to be successful on the AP exam.",
            "hw": "3 to 5 hours uninterrupted time per week",
            "prereqs": "Successful completion of a biology course. Successful completion of a first-year chemistry course at Gunn High School. (Exceptions must be approved by both the Science Department Instructional Supervisor and the Guidance Department.)",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "HUMAN ANATOMY & PHYSIOLOGY",
                    "cid": "3159"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “d”",
            "section": "SCIENCE",
            "description": "This college-prep course covers the design structure of the human body and how it meets the demands of everyday \nliving. Students explore connections between form and function through units in cell biology that include, histology \n(tissue study), and the following body systems: Integumentary, Nervous, Skeletal, Muscular, Respiratory, \nCardiovascular, Immune, Renal, and Digestive. Students will investigate the integration of these systems in the context \nof homeostasis. \nThis course includes lecture, discussion, and significant practical experience while working with microscopes, \nanatomical models, laboratory investigations, and various dissections. Human A&P emphasizes the evolutionary basis \nfor basic body organization, identification of anatomical parts, and the coordination of systems to maintain health and \nwellness.",
            "hw": "1 to 2 hours uninterrupted time per week",
            "prereqs": "Successful completion of a biology course and a physical science course (Chemistry strongly recommended)",
            "slos": [
                "1",
                "2",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ACADEMIC ENHANCEMENT",
                    "cid": "7090"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "Academic Enhancement is a course designed to provide reading intervention that aligns with California State \nStandards designed to accelerate the reading levels and test scores of struggling readers by directly addressing \nindividual student needs. The course provides differentiated instruction, high-interest fiction and nonfiction reading \nmaterials, and direct instruction in reading skills, vocabulary, writing, and grammar.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "Placement in Academic Enhancement is recommended based on reading scores/level. This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. Upon successful completion, students receive 10 units of elective credit. This course must be taken concurrently with a general education English course."
            ]
        },
        {
            "names": [
                {
                    "title": "ACADEMIC PLANNING",
                    "cid": "8308"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "This course is designed to provide students with instruction on organizational skills and academic study skills. \nStudents are introduced to the concepts and methods needed to increase study efficiency and improve critical thinking. \nThe course acquaints students with better study habits and the processes and practices of critical thinking. Specific \nareas that may be covered are listening, textbook reading, time scheduling, prioritizing, note-taking, test- preparation \nand test-taking strategies, project and paper development, library skills, basic study systems improvement, memory \nprocesses and strategies, and models of critical thinking. The course is designed to improve students' knowledge and \napplication of effective study and cognitive/thinking strategies so they can succeed in college and in any other \nenvironment.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "Placement in Academic Planning is recommended based on student need for specialized support. This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. Upon successful completion, students receive 10 units of elective credit."
            ]
        },
        {
            "names": [
                {
                    "title": "ACADEMIC WRITING",
                    "cid": "7087"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "This course gives students the opportunity to develop their academic writing skills. Students receive instruction in \ngenerating and developing effectively written sentences, paragraphs, and essays. They review basic grammar principles \nto develop sentence correctness and practice skills in expanding and clarifying sentence and paragraph content. A \nstrong emphasis on planning, writing, and revising of assignments will be a key component of instruction. A \ncombination of individualized and group instruction in a classroom or workshop setting will be used. \nStudents receive additional help writing for required English courses and more time to develop the skills they need to \nperform well in high school and prepare for college.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "Placement in Academic Writing is recommended based on student need for specialized support in the academic area of writing. This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. Upon successful completion, students receive 10 units of elective credit. This course must be taken concurrently with a general education English course."
            ]
        },
        {
            "names": [
                {
                    "title": "ACADEMIC MATH",
                    "cid": "7088"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "This course will help students prepare for introductory algebra by strengthening their understanding of essential \nalgebra prerequisites. The course will cover: arithmetic operations using fractions, decimals and integers; proportional \nreasoning using ratios and percents; solutions of linear equations; equivalent expressions; the distributive property; \nand graphs of linear functions. Students will investigate problems using tables, graphs, and equations in order to make \nconnections between the three representations.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "Placement in Academic Math is recommended based on student need for specialized support in the academic area of math. This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. Upon successful completion, students receive 10 units of elective credit. This course should be taken concurrently with a general education math course."
            ]
        },
        {
            "names": [
                {
                    "title": "ACADEMIC COMMUNICATION",
                    "cid": "7070"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "Academic Communication is a course that addresses social learning needs. The main goals of the courses in Academic \nCommunication include: development of personal problem solving, communication skills, perspective taking, a solid \nunderstanding of social thinking, flexibility and independence. \nAcademic Communication 1: This course addresses the social learning needs of students with deficits in the area of \nsocial cognition. Students receive direct instruction in the area of effective social communication strategies such as \nperspective taking, problem-solving, and communication skills. Students explore how emotions affect them in \neveryday situations. The Mental Health Therapist and Speech and Language Therapist deliver lessons weekly in this \nclass and provide additional support to students as needed. \nAcademic Communication 2/3: This course provides direct instruction on career and college related skills as well as \nfinancial skills including budgeting. The course focuses on addressing social cognitive deficits that are directly related \nto getting and maintaining employment and daily living skills. Vocational opportunities are provided for exploration. \nThe Mental Health Therapist and Speech and Language Therapist deliver lessons weekly in this class and provide \nadditional support to students as needed.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. Upon successful completion, students receive 10 units of elective credit. This course should be taken concurrently with a general education math course."
            ]
        },
        {
            "names": [
                {
                    "title": "THERAPEUTIC ELECTIVE CLASS",
                    "cid": "7078"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "The Therapeutic Elective Class (TEC) serves students who require regular therapeutic interventions in order to access \ntheir educational programs. The class includes academic instruction and therapeutic support. This class is co-taught \nby a special education teacher and a mental health therapist. Group therapy services are embedded into the class with \nindividual therapy services available for students who qualify. This class is designed to teach students how to effectively \nand safely regulate their emotions with a goal of being able to successfully transition out of the class after one year. \nReferral process, assessments, and IEP documentation required: In order for a student to be eligible for the TEC class, \nthe case manager must submit a TEC referral form. The therapist may conduct an assessment and an IEP meeting will \nbe held to discuss assessment results and recommendations.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. Upon successful completion, students receive 10 units of elective credit. This course should be taken concurrently with a general education math course."
            ]
        },
        {
            "names": [
                {
                    "title": "CAREERS CLASS",
                    "cid": "7082"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "SPECIAL EDUCATION",
            "description": "This course is designed to assist students with identifying their strengths, weaknesses, and interest while learning about \na wide variety of careers. Students will complete several different career interest inventories and self- assessments in \norder to identify where their individual strengths and interest intersect. Students will explore different career options \nand conduct research on those that interest them most. Through this research, students will investigate what \neducational prerequisites and/or vocational experience is required to enter their field of choice. Students will also work \ntoward job placement/internship experiences.",
            "hw": "None",
            "slos": [
                "1",
                "3",
                "4",
                "6"
            ],
            "notes": [
                "This course is a Specialized Academic Instruction course and requires a signed IEP delineating it as a direct service. This course is open to 10th, 11th, and 12th grade students. Upon successful completion, students receive 10 units of elective credit."
            ]
        },
        {
            "names": [
                {
                    "title": "ART SPECTRUM",
                    "cid": "6205"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This foundation course is designed to meet the challenge of creating visual art in a compelling and interesting way. \nThrough 2-D and 3-D experiences the curriculum will provide each artist with the ability to generate creative ideas as \nwell as the skills to execute them. Since learning to create visual art involves learning to see, Art Spectrum focuses on \nthe development of this essential visual skill. Observational and conceptual exercises will explore the use of a broad \nvariety of materials, techniques, and treatments used to design, draw, paint, and sculpt. Approaching the arts with \ntraditional, hands-on methods, students will learn how to render from life using graphite or charcoal, paint knowing \ncolor theory using tempera or watercolor, design with elements and principles using software or apps, and build three-\ndimensional forms using clay or wire. \nExposure to art in our community, peer support, and the development of personal sketchbooks will build confidence \nto create. This course inspires and encourages a positive feeling about the visual arts, and knowledge of the basic \ntechniques and procedures to experience and understand art. \nArt Spectrum is the pathway or prerequisite course for Gunn’s Graphic Design, Painting/Drawing, and \nCeramics/Sculpture programs. While the class focuses on art making, it will also include discussions, \nreflection/critiques, occasional short written assignments, and will include information on artists and artistic styles of \nhistorical significance. Outside work may include very occasional sketch or research assignments, and all Art Spectrum \nstudents are assigned a Museum Visit. Students will be able to communicate informed critical reflections about their \nwork and that of others, develop an appreciation of the historical and cultural contributions of art and design, and \nunderstand the connections between art, design and a variety of associated career options.",
            "hw": "1 hour per week on average",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ART SPECTRUM: DIGITAL EMPHASIS",
                    "cid": "6393"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This course can be used to fulfill the “f” requirement, the Visual and Performing Arts requirement for the CSU and \nUC systems. \nArt Spectrum: Digital Emphasis, like Art Spectrum, is a beginning, yearlong foundation art class that focuses primarily \non digital art and design, and also includes short traditional units in drawing, painting, and clay. It is aligned in content \nwith our established more traditional Art Spectrum class. Art Spectrum: Digital Emphasis is UC approved and can be \nused to fulfill the “f” requirement, the Visual and Performing Arts requirement for the CSU and UC systems. Art \nSpectrum: Digital Emphasis is the pathway or prerequisite course for Gunn’s Graphic Design program, \nPainting/Drawing program, and its Ceramics/Sculpture classes. Additionally, it complements learning in our \nPhotography and Journalism classes. \n\nDigital Art Spectrum focuses on digital art experiences. Students will develop an understanding of major art and design \nconcepts including technical, expressive, idea development and creative problem solving, critical thinking, and the \nlanguage of art. Art Spectrum: Digital Emphasis introduces students to Art Spectrum art and design units through the \nuse of Photoshop and Illustrator, two important art software programs, and use of WACOM Digital Drawing Tablets. \nStudents will also engage in digital drawing and painting, including work in light and shadow, perspective, color theory \nand color application. Short traditional drawing, painting and clay exercises are included to strengthen learning and \nconnections within the various units. While the class focuses on art making, it will also include discussions, \nreflection/critiques, occasional short written assignments, and will include information on artists and artistic styles of \nhistorical significance. Outside work may include very occasional sketch or research assignments, and all Art Spectrum \nstudents are assigned a Museum Visit. Students will be able to communicate informed critical reflections about their \nwork and that of others, develop an appreciation of the historical and cultural contributions of art and design, and \nunderstand connections between art, design and a variety of associated career options.",
            "hw": "1 hour per week on average",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "PAINTING & DRAWING",
                    "cid": "6340"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Drawing is the foundation of all artists to describe their ideas, regardless of the medium of the final product. This \ncourse will prepare any student to draw well by enhancing their ability to see subtle value ranges, create a full range of \nbold values, understand relationships of space and learn what makes a strong composition. This course can be repeated \nfor two years with credit. \nDesigned as the first course in the Drawing and Painting Program, the curriculum gradually builds upon itself to move \nfrom an exploration in expressive mark-making with graphite, conté, charcoal, colored pencil and pastel, to a painting \nexperience. Drawing well is the foundation for painting well, thus it is after drawing that advanced color theory, \npainting approaches and brush techniques are considered through acrylic, watercolor and digital painting. \nAssignments are designed to build the “artist’s tool belt”– the technical and expressive skills to render a broad range \nof surface qualities or textures upon the illusion of forms, in both black and white and color. The lessons encourage \ncreative, imaginative thinking to begin visually communicating personal concepts. \nHistorical and cross-cultural views on art are integrated into lessons and discussions; sketchbooks are highly used; and \nexposure to local artwork is obligatory. Representatives will be invited to present, from private Art Colleges and UCs \nwith strong art programs, about options for art careers. \nCourse work will include art history, research, museum reports, artist statements, and participation in critiques.",
            "hw": "1 hour per week on average",
            "recCourses": "Art Spectrum or equivalent, or consent of the instructor; grades 10-12",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED PAINTING & DRAWING 1",
                    "cid": "6344"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This course can be used to fulfill a year of Career Tech Education (CTE) credit. \nDesigned sequentially as the second course in the Drawing and Painting Program, Advanced Painting and Drawing is \nan expansion of the drawing and painting experience, and is less rigorous than the Honors curriculum. This course \ndevelops the artist’s expression to communicate visually and find personal meaning in student work. While building \ntechnical and expressive skills in advanced media such as Intaglio printmaking, oil painting, digital painting and mixed \nmedia, the creation of concept-driven work will be achievable. Through advanced understanding and use of design \nelements and principles, the beginning of a high- quality body of work will be developed in preparation for college \nand personal portfolios. \nStudents will support one another’s artistic process through peer assessment, build articulation of conceptual meaning \nby using advanced art vocabulary in critiques, and create a positive studio environment. This course is for mature \nartists who have a strong foundation in the use of multiple media, are serious about making art and have responsible \nstudio behavior. \n\nAssignments will gradually be less structured, allowing for personal motivation towards artistic independence. \nSketchbooks become an essential part of documenting growth, and semester museum visits and reports offer \nimportant exposure to new art and artists. Seniors have the option to curate and exhibit their body of work in the \nLibrary Gallery through a sign-up process.",
            "hw": "2 hours per week on average",
            "recCourses": "Successful completion of one full year of Drawing/Painting; grades 10-12",
            "slos": [
                "1",
                "4",
                "6"
            ],
            "notes": [
                "Offered together with Advanced Painting & Drawing H",
                "May also satisfy the CTE graduation requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED PAINTING & DRAWING HONORS",
                    "cid": "6339"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This course can be used to fulfill a year of Career Tech Education (CTE) credit and can be repeated an additional year \nfor Elective (non-CTE) credit. \nDesigned sequentially as the second course in the Drawing and Painting Program, Advanced Painting and Drawing \nHonors is an expansion of the drawing and painting experience and gives Honors credits. This course develops the \nartist’s expression to communicate visually and find personal meaning in student work. While building technical and \nexpressive skills in advanced media such as Intaglio printmaking, oil painting, digital painting and mixed media, the \ncreation of concept-driven work will be achievable. Through advanced understanding and use of design elements and \nprinciples, the beginning of a high-quality body of work will be developed in preparation for college and personal \nportfolios. Overall, it is a “Portfolio Preparation” course meant to build and refine 2-D work for a college portfolio, an \nAP Studio Art Portfolio, or for personal interest. \nStudents will support one another’s artistic process through peer assessment, build articulation of conceptual meaning \nby using advanced art vocabulary in critiques, and create a positive studio environment. This course is for mature \nartists who have a strong foundation in the use of multiple media, are serious about making art and have responsible \nstudio behavior. \nAssignments will gradually be less structured, allowing for personal motivation towards artistic independence. The \nHonors status will involve more rigor with regular sketchbook work and compositional analysis and ideation \ndevelopment writing. Sketchbooks become an essential part of documenting growth, and semester museum visits and \nreports offer important exposure to new art and artists. Seniors have the option to curate and exhibit their body of \nwork in the Library Gallery through a sign-up process.",
            "hw": "2 hours per week on average",
            "recCourses": "Successful completion of one full year of Drawing/Painting; grades 10-12",
            "slos": [
                "1",
                "4",
                "6"
            ],
            "notes": [
                "Offered together with Advanced Painting and Drawing I",
                "May also satisfy the CTE graduation requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED PAINTING & DRAWING II",
                    "cid": "6349"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Designed as the third course in the Painting and Drawing Program, this course has a self-directed curriculum. Thus, \nquarterly contracts will be based on student-designed learning objectives and aesthetic intent, with a minimum of \nthree pieces of artwork per quarter. Portfolio development will be supported through quarterly one-on-one \nconsultations and class critiques. \nThis advanced course is in the same period as AP Studio Art, and is for students who choose to opt out of AP Studio \nArt, but desire artistic independence and full studio access. Sketchbooks continue to be an essential part of \ndocumenting personal and artistic growth, and semester museum visits and reports offer important exposure to art \ntrends and concepts. \nSeniors have the option to curate and exhibit their body of work in the Library Gallery through a sign-up process.",
            "hw": "2 hours per week on average",
            "recCourses": "Successful completion of one full year of Advanced Drawing/Painting; grades 11-12",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AP – DRAWING",
                    "cid": "6459"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The AP Studio Art Painting and Drawing Portfolio consists of artwork involving drawing, painting, printmaking, and \nmixed media. Advanced Drawing & Painting II and AP Studio Art students are in the same period, and both courses \nwill be together for critiques twice a year. \nStudents who enroll in this college-level course must first successfully complete a review of their current portfolio with \nthe Painting and Drawing instructor for assessment, ideally by the end of the previous year. If the quantity and quality \nin the body of work reflects the necessary preparation, or summer plans indicate productive art making or instruction, \nthen there is acceptance to proceed. \nApproximately 15 completed pieces reflecting first-year, college-level standards are required in the portfolio by the \nfirst week of May, and should exhibit these areas of concern: Sustained Investigation and Selected Works. Photo shoots \nare scheduled as a service to digitally document artwork for digital submission of Sustained Investigation. Five actual \npieces for the Selected Works portion are mailed in an 18” X 24” portfolio to the AP College Board, to be returned \nmid-summer. \nQuarterly, one-on-one reviews are scheduled with instructor to monitor progress, guide the artistic process and \nevaluate conceptual development and mastery of drawing and painting. To maintain a position in this course, evidence \nof roughly four pieces per quarter is upheld and a commitment of responsible studio behavior is expected. The AP \nCollege Board will assign college credit for this course after their review in summer, upon receiving a score of 3 or \nhigher and completion of their form.",
            "hw": "The homework will depend greatly on how many art pieces the student brings to the AP course from their portfolio. It is recommended that students have at least Six completed pieces for the Selected Works and/or Sustained Investigation prior to admission. Seniors have the option to curate and exhibit their body of work in the Library Gallery through a sign-up process.",
            "recCourses": "Successful completion of one full year of at least one Advanced Painting and Drawing course within that discipline and approval of instructor",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "GRAPHIC DESIGN",
                    "cid": "6262"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This is an introductory course involving studio inquiry into the nature of graphic design and visual problem-solving. \nTopics introduced in the course are: symbols, typography, information design, visual concepts, and three-dimensional \ngraphic design. Emphasis is placed on the basic art elements and principles that underlie all great designs – the tools \nand techniques needed to effectively translate visual ideas, execute the concept, and construct a design, in order to \ndevelop an understanding of how form and message create a visual language. The course also introduces the student \nto studio operations and procedures including traditional and digital media, client-designer relations, production \nprocesses for print media, graphic design history and cultural content, as well as written and oral components of \nclasswork. Seniors have the option to curate and exhibit their body of work in the Library Gallery through a sign-up \nprocess. This course is open to grades 10-12.",
            "hw": "1 hour per week on average",
            "prereqs": "Art Spectrum or equivalent",
            "slos": [
                "1",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED GRAPHIC DESIGN",
                    "cid": "6274"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The primary goal of this course is to develop an advanced understanding of the methods and concepts employed in \nsolving communications problems in graphic and package design. This course also serves to prepare a portfolio of \nfundamental and dependable methods for creating meaningful, imaginative, communication solutions through \nresearch, analysis, oral and written investigation of communication tasks and their target audiences. Traditional and \ndigital media are utilized, as well as demonstrations, presentations, group exercises, historical and cultural research, \nclass critiques, and one-on-one meetings with students. \nSeniors have the option to curate and exhibit their body of work in the Library Gallery through a sign-up process. This \ncourse is open to grades 11-12.",
            "hw": "2 hours per week on average",
            "recCourses": "Successful completion of one full year of Graphic Design I and approval of instructor. This class fulfills the district Career Technical Education requirement.",
            "slos": [
                "1",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "CERAMICS",
                    "cid": "6258"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "An introductory course in ceramics designed for students who have an interest in making functional wheel thrown \npottery as well as hand-built sculptural works. Projects are structured to provide students with foundational technical \nskills while also allowing them to explore their own creative expression. Design, aesthetics and planning are an integral \npart of the curriculum. Students will be required to keep an active sketchbook where they sketch their concepts and \ndesign their works before construction. The ceramics curriculum analyzes historical, cultural and aesthetic aspects of \nclay working and creative problem solving. \nAs a result of taking this course, students will be able to create works of art that reflect an understanding of the elements \nof art and the principles of design. They will be able to appreciate and discuss the artistic accomplishments of various \ncultures, past and present, using visual art’s vocabulary. Photographing completed works, critiques and \nmuseum/gallery visits are an expected part of the curriculum. This course is open to grades 10-12.",
            "hw": "See course description",
            "recCourses": "Art Spectrum or equivalent, or teacher approval",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED CERAMICS 1",
                    "cid": "6277"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Advanced Ceramics I is the second course in the Ceramics Program and is designed to build upon the foundational \nskills taught in Ceramics. The course is designed to develop student voice in their created work and covers a variety of \nmore advanced techniques both in sculpture and on the potter’s wheel. Students are expected to become proficient \ndesigners and planners—students will have more freedom to develop their own ideas and develop skills in a particular \narea. Sketchbooks are required in which students will take notes, collect research and sketch designs prior to \nconstruction. \nStudents are expected to participate in critiques and will have opportunities to exhibit their work in the library and in \nthe community. Advanced Ceramics I is the prerequisite for Advanced Ceramics II and AP Studio Art 3-D Design. \nOpportunities to photograph student work will occur throughout the year in order to build a digital portfolio.",
            "hw": "Less than 1 hour per week depending on the particular project, degree of involvement and point in the curriculum",
            "recCourses": "Successful completion of one full year of Ceramics or approval of the instructor",
            "slos": [
                "1",
                "4",
                "6"
            ],
            "notes": [
                "May also satisfy the CTE graduation requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED CERAMICS 2",
                    "cid": "6279"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Designed as the third course in the Ceramics Program, Advanced Ceramics II is designed to expand upon students’ \ninterests in working with clay. The course is self-directed and is therefore geared for the student who is motivated to \nundertake ambitious work in clay. Students must get projects preapproved by the instructor and a minimum of four \nprojects per semester is required.\nThe goal for this course is to provide the advanced student the opportunity to grow in a setting with ambitious peers \nand to produce works toward a sophisticated portfolio. Students will explain or justify themes and aesthetic decisions, \nand make connections to art history and culture. \nSketchbooks are required in which students will take notes, collect research and sketch designs prior to construction. \nStudents will have the opportunity to exhibit their work in the library and in the community. Photography of student \nwork will occur throughout the year in order to build a digital portfolio.",
            "hw": "Less than 1 hour per week depending on the particular project, degree of involvement and point in the curriculum",
            "recCourses": "Successful completion of one full year of Advanced Ceramics I or the approval of the instructor",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AP STUDIO ART 3-D DESIGN",
                    "cid": "6449"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "To enroll in AP 3-D Studio Art you must have completed at least one year of Advanced Ceramics and have met with \nthe instructor to review your current portfolio of work. This course is intended for serious students who would be \nmotivated to develop a body of work and who are independent learners. This course runs in the same period as \nAdvanced Ceramics. \nThe AP 3-D Design portfolio consists of two sections: Sustained Investigation and Selected Works. \n The Sustained Investigation, section 1, will include 15 digital images; some detail and process images (60% of portfolio \nscore). Students will submit images and writing to document their inquiry-guided investigation through practice, \nexperimentation and revision. \nThe Selected Works, section 2, will include 10 images of five works that may come from section 1 (40% of portfolio \nscore). Students will submit works of art and design to demonstrate skillful synthesis of materials, processes and ideas. \nQuarterly, one-on-one reviews are scheduled with the instructor to monitor progress, guide the artistic process and \nevaluate conceptual development and mastery of media and design principles. To maintain a position in this course, \nevidence of roughly four pieces per quarter is upheld and a contract of commitment and responsible studio behavior \nis signed. The AP College Board will assign college credit for this course after their review in summer, upon receiving \na score of 3 or higher and completion of their form.",
            "hw": "The homework will depend greatly on how many art pieces the student brings to the AP course from their portfolio. It is recommended that students have at least nine completed pieces for the breadth portion, prior to admission. Seniors have the option to curate and exhibit their body of work in the Library Gallery through a sign-up process.",
            "recCourses": "Successful completion of one full year of at least one Advanced course within that discipline and approval of instructor",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "PHOTOGRAPHY 1",
                    "cid": "6150"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Students learn film and DSLR camera operation, digital workflow, composition and design principles, introductory \nimage editing and management in Adobe software (such as Photoshop and Lightroom), related terminology and \ntechniques, and matting/presentation of finished work. Other assignments may include pinhole camera, portraiture, \nuse and selection of lenses, and traditional darkroom techniques. The curriculum will provide learning experiences \nwhich include the historical and interdisciplinary aspects of photography, taught through the use of slides, videos and \nstudent presentations. \nStudents will gain confidence in their abilities to create original compositions. Successful work will need to \ndemonstrate technical proficiency and creative expression. Through writing, research and discussions, students will \ndemonstrate aesthetic perception, evaluation and an understanding of historical and cultural aspects of the medium. \nStudents may be assigned a museum or gallery visit in Palo Alto. This course is open to grades 10-12.",
            "hw": "On average, 1 hour per week",
            "slos": [
                "1",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED PHOTOGRAPHY",
                    "cid": "6158"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Advanced Photography builds on skills taught in Photo I. This course fulfills the district Career Technical Education \nrequirement. Assignments will emphasize the technical as well as emotional and communicative nature of the \nphotographic medium. Students will master advanced skills in composition, use 35 mm or medium format film \ncameras, and practice portable or studio lighting techniques. Students will expand their knowledge of darkroom and \ndigital processes to include contrast control, filters, dodging and burning, advanced film exposure and developing \nmethods. They will also explore one or more alternative photo processes (such as multiple exposures, cyanotype, \nsolarization and photograms). \nStudents who successfully complete this course will be able to demonstrate an understanding of current and historical \ndirections in photography through completed works, written reviews of exhibits and class critiques. Students will have \nthe opportunity to take field trips outside of Palo Alto, where they will visit galleries and practice street photography \nor nature photography. During the second semester, students will develop an independent project and have the option \nto create a blog that features their work. They will also be introduced to online book publishing and have the \nopportunity to create their own photo book. \nThis course may be repeated for credit upon instructor recommendation. Third-year students will select a theme that \nthey pursue independently, along with regular meetings for feedback from the instructor. Students can use this third \nyear to build a solid portfolio with which to apply to college art programs. Students my take an Honors version of this \ncourse (see description course #4917). Advanced Photography is required in order to take the AP Studio Art 2-D \nDesign course. \nSeniors in Advanced Photo have the opportunity to curate and exhibit their work on campus through a sign-up \nprocess.",
            "hw": "On average 1 hour per week",
            "recCourses": "Successful completion Photography 1 or instructor approval",
            "slos": [
                "1",
                "6",
                "7"
            ],
            "notes": [
                "This course fulfills the district Career Technical Education requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED PHOTOGRAPHY HONORS",
                    "cid": "4917"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Advanced Photography Honors builds on skills taught in Photo I. This course fulfills the district Career Technical \nEducation requirement. Assignments will emphasize the technical as well as emotional and communicative nature of \nthe photographic medium. Students will master advanced skills in composition, use 35 mm or medium format film \ncameras, and practice portable or studio lighting techniques. Students will expand their knowledge of darkroom and \ndigital processes to include contrast control, filters, dodging and burning, advanced film exposure and developing \nmethods. They will also explore one or more alternative photo processes (such as multiple exposures, cyanotype, \nsolarization and photograms). \nStudents who successfully complete this course will be able to demonstrate an understanding of current and historical \ndirections in photography through completed works, written reviews of exhibits and class critiques. Students will have \nthe opportunity to take field trips outside of Palo Alto, where they will visit galleries and practice street photography \nor nature photography. During the second semester, students will develop an independent project and have the option \nto create a blog that features their work. They will also be introduced to online book publishing and have the \nopportunity to create their own photo book. This course may be repeated for credit upon instructor recommendation. \nHonors students will have additional assignments (written and project-based) beyond those in Advanced Photo, and \nwill select a theme that they pursue independently throughout the year, along with regular meetings for feedback from \nthe instructor. Advanced Photography Honors will prepare students interested in taking the AP Studio Art 2- D \nDesign course. Seniors in Advanced Photo Honors have the opportunity to curate and exhibit their work on campus \nthrough a sign-up process. Students may be assigned a museum or gallery visit in Palo Alto or in the Bay Area.",
            "hw": "On average 1 hour per week",
            "recCourses": "Successful completion Photography 1 and instructor recommendation",
            "slos": [
                "1",
                "6",
                "7"
            ],
            "notes": [
                "This course will also fulfill the district Career Technical Education requirement"
            ]
        },
        {
            "names": [
                {
                    "title": "AP 2-D ART & DESIGN EMPHASIS ON PAINTING/DRAWING",
                    "cid": "6448DP"
                },
                {
                    "title": "AP 2-D ART & DESIGN EMPHASIS ON GRAPHIC DESIGN",
                    "cid": "6448GD"
                },
                {
                    "title": "AP 2-D ART & DESIGN EMPHASIS ON PHOTOGRAPHY",
                    "cid": "6448PH"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The AP 2-D Art and Design portfolio can include any 2-D media: photography, mixed media, drawing, painting, \nprintmaking, graphic design, digital arts, product design and jewelry making. Students can choose to focus their \nportfolio specifically towards Photography or Graphic Design or Painting and Drawing. \nStudents who enroll in this college-level course must first successfully complete a review of their current portfolio with \nthe 2-D Studio Art instructor for assessment, ideally by the end of the previous year. If the quantity and quality in the \nbody of work reflects the necessary preparation, or summer plans indicate productive art making or instruction, then \nthere is acceptance to proceed. \nApproximately 15 completed pieces reflecting first-year, college-level standards are required in the portfolio by the \nfirst week of May, and should exhibit these areas of concern: Selected Works and Sustained Investigation. Five actual \npieces for the Selected Works portion are mailed in an 18’ X24” portfolio to the AP College Board, and will be returned \nby mid-summer. \nQuarterly, one-on-one reviews are scheduled with the instructor to monitor progress, guide the artistic process and \nevaluate conceptual development and mastery of the chosen discipline. To maintain a position in this course, evidence \nof progress per quarter is upheld with a commitment to responsible studio behavior is expected. The AP College Board \nwill assign college credit for this course after their review, upon receiving a score of 3 or higher and completion of their \nform. Seniors have the option to curate and exhibit their body of work in the Library Gallery through a sign-up process.",
            "hw": "The homework will depend greatly on how many art pieces the student brings to the AP course from their portfolio. It is recommended that students have at least seven to nine completed pieces for the breadth portion, prior to admission.",
            "prereqs": "Admission may be granted to juniors or seniors who have successfully completed advanced courses in photography, graphic design and/or drawing and painting; grades 11-12",
            "slos": [
                "1",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ART HISTORY 11",
                    "cid": "6241 Semester 1"
                },
                {
                    "title": "ART HISTORY 12",
                    "cid": "6242 Semester 2"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Semester/Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This course surveys the great masters and trends of the history of art, together with an examination of art as a reflection \nof other historical events. We explore Western art from prehistory through the present, including themes such as: war, \npower, colonization, landscape, mythology and religion, representations of the human body, use of text and \ntechnology. The arts of non-Western cultures are included throughout the year for appreciation of their unique \nqualities. This includes Oceanic, African, Native American Indian and Asian arts. Class activities include films, slides, \nmuseum field trips, lectures and related reading and research. \nStudents who successfully complete this course will need to demonstrate an understanding of Art History chronology, \nand how different cultures have aesthetically perceived artistic expressions. They will also need to show expanded \nability to make aesthetic judgments about content, techniques, forms, and purposes of art, as seen throughout history. \nStudents may be assigned museum visits outside of class. \nThis course can be taken for AP credit through enrollment for the full year and completion of all additional AP course \nwork. See the course description for AP Art History for details. One semester of this course will fulfill the Social Studies \nelective requirement for graduation.",
            "hw": "On average, 1 hour per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "AP ART HISTORY",
                    "cid": "6249"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This course surveys the great masters and trends of the history of art, together with an examination of art as a reflection \nof other historical events. We explore Western art from prehistory through the present, including themes such as: \nwar/power, colonization, landscape, mythology and religion, representations of the human body, use of text and \ntechnology. The arts of non-Western cultures are included throughout the year for appreciation of their unique \nqualities. This includes Oceanic, African, Native American Indian and Asian arts. Class activities include films, slides, \nmuseum field trips, lecture-related reading and research. \nStudents who successfully complete this course will need to demonstrate an understanding of Art History chronology, \nand how different cultures have aesthetically perceived artistic expressions. They will also need to show expanded \nability to make aesthetic judgments about content, techniques, forms, and purposes of art, as seen throughout history. \nFor AP credit, students will need to take expanded notes on the readings in our textbooks, and practice essay writing. \nStudents may be assigned museum visits outside of class. One semester of this course will fulfill the Social Studies \nelective requirement for graduation.",
            "hw": "3 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "CONCERT BAND",
                    "cid": "7010"
                }
            ],
            "grades": [
                9
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Concert Band is an intermediate/advanced ensemble open to students with an instrumental background who wish \nto be a part of a quality performing group. There will be a strong emphasis on instrumental techniques and music \nfundamentals taught through performance. As a result of participation in this class, the student will be ready to \naudition for more advanced ensembles. \nThe Concert Band is an ensemble committed to a high level of study and performance of standard and contemporary \nlarge band repertoire. This ensemble provides the students with the opportunity to study and perform outstanding \nband literature from the Renaissance to the present. \nAttendance at all performances is mandatory. Performance opportunities include fall, winter and spring concerts, \nCMEA Band Festival, solo/ensembles, feeder school concerts. There are also opportunities for individuals to audition \nfor other ensembles: Honors symphony Orchestra, Jazz Bands, All-State Honor Band, and the Santa Clara County \nHonor Band. This course is open to grade 9 students only.",
            "hw": "90-120 minutes per week outside of class practice. Both performance and written assessments will be included in the curriculum",
            "recCourses": "At least one year of instruction on a band instrument, and at least two years’ experience in your middle school band program. If you do not meet this requirement, you must audition for the directors. If you were not part of your 8th grade band you must audition. Please contact one of our band directors to set up an audition.",
            "slos": [
                "1",
                "2",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "SYMPHONIC BAND",
                    "cid": "7013"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Symphonic Band is an advanced ensemble open to students with a strong instrumental background who wish to \nbe part of a quality performing group. There will be a strong emphasis on performance techniques and developing a \nrepertoire of the finest literature for performances. As a result of this experience, the student will be able to better \nexpress themselves creatively, and they will have a knowledge and appreciation of music history. Both performance \nand written assessments will be included in the curriculum.\nThe Symphonic Band is an ensemble committed to a high level of study and performances of standard and \ncontemporary large band repertoire. This ensemble provides the students with the opportunity to study and perform \noutstanding band literature from the renaissance to the present. \nAttendance at all performances is mandatory. Performance opportunities include fall, winter and spring concerts, \nCMEA Band Festival, solo/ensemble, feeder school concerts, and graduation. There are also opportunities for \nindividuals to audition for other ensembles: Jazz Band, Honors symphony Orchestra, All-State Honor Band, and the \nSanta Clara County Honor Band. This course is available for Career Technical Education credit to students in grades \n11-12 with teacher approval.",
            "hw": "90-120 minutes per week outside of class practice. Both performance and written assessments will be included in the curriculum.",
            "recCourses": "At least two years of instruction on a band instrument and at least one year in Concert Band at Gunn High School. If you are entering Gunn from outside PAUSD schools you must audition for the directors. Please contact one of our band directors to set up an audition. Grades 10-11-12.",
            "slos": [
                "1",
                "2",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "WIND ENSEMBLE",
                    "cid": "6455"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Wind Ensemble is a highly advanced and select ensemble open to students with an extensive background in \ninstrumental music performance. This ensemble will focus on the performance techniques and knowledge of \nrepertoire associated with the finest in band and wind literature. All of the selected works, concepts learned, and \ntechniques developed, will adequately prepare students to participate in collegiate-level musical ensembles. There is \nan opportunity for all students in this ensemble to participate in small chamber music ensembles. Performance \nassessment, written assessment and self- assessment will be integral parts of the curriculum. Attendance at all \nperformances is mandatory. Performance opportunities include Fall, Winter, and Spring concerts, California Music \nEducators Association Festivals, Solo-Ensemble festivals, feeder school concerts, regional and national tours, \ncommunity events, and graduation. There are also opportunities for students to audition to participate in select \nensembles such as the Jazz Band, Honors symphony Orchestra, the Santa Clara County Honor Band, the California \nBand Directors Association All-State Honor Band, and the California Music Educators Association All-State Honor \nBand. \nThis course is available for Career Technical Education credit to students in grades 11-12 with teacher approval.",
            "hw": "2 hours per week",
            "recCourses": "Teacher approval and/or audition required. Auditions for Wind Ensemble are held in the spring each year for the following year. At least three years of instruction on a band instrument, and at least one year performing in a Gunn Large Ensemble the prior year. If you are entering from outside PAUSD, you must have performed in your school band for a year",
            "slos": [
                "1",
                "2",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "JAZZ ENSEMBLE",
                    "cid": "7022"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Jazz Ensemble course will focus on the performance techniques and knowledge of repertoire associated with the \nfinest in jazz band literature. Emphasis is placed on the preparation for the performances and evaluation at concerts \nand various jazz festivals throughout the year. Students will perform music from the international jazz heritage, \ndrawing from, but not limited to, the following styles: blues, swing, be-bop, ballads, bossa nova, samba, funk and jazz \nrock. Performance assessment, written assessment and self-assessment will be integral parts of the curriculum. \nStudents will also study and practice jazz improvisation, using music theory and guided listening as tools to an \nexploration and development of improvising skills. Attendance at all performances is mandatory. \nPerformance opportunities include Winter and Spring Concerts, guest artist concert (featuring jazz professionals as \nguest soloist), various Jazz Festivals and various local concerts in other schools or the community.",
            "hw": "2 hours per week",
            "recCourses": "At least 3 years of instruction on a jazz band instrument and at least 2 years of performing in an ensemble. Student must be a member of the Band or Orchestra. Teacher approval and/or audition required.",
            "slos": [
                "1",
                "2",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "JAZZ B",
                    "cid": "7017"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Jazz B course will focus on the performance techniques and knowledge of repertoire associated with the finest in \njazz band literature. Emphasis is placed on the preparation for the performances and evaluation at concerts and various \njazz festivals throughout the year. Students will perform music from the international jazz heritage, drawing from, but \nnot limited to, the following styles: blues, swing, be-bop, ballads, bossa nova, samba, funk and jazz rock. Performance \nassessment, written assessment and self-assessment will be integral parts of the curriculum. Students will also study \nand practice jazz improvisation, using music theory and guided listening as tools to an exploration and development \nof improvising skills. Attendance at all performances is mandatory. Performance opportunities include Winter and \nSpring Concerts, guest artist concert (featuring jazz professionals as guest soloist), various Jazz Festivals and various \nlocal concerts in other schools or the community.",
            "hw": "2 hours per week",
            "recCourses": "At least 3 years of instruction on a jazz band instrument and at least 2 years of performing in an ensemble. Student must be a member of the Band or Orchestra. Teacher approval and/or audition required.",
            "slos": [
                "1",
                "2",
                "4",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ORCHESTRA",
                    "cid": "7030"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Orchestra will focus on string techniques, knowledge of a broad representation of different string and orchestral \nrepertoire, as well as the promotion of lifelong learning attitudes about ALL music. Students will perform music drawn \nfrom the Renaissance to the present. While performance will be an integral part of the end product, the ongoing \nprocess of rehearsing quality music at a high level of musicianship will be the daily challenge. Performance assessment, \nwritten assessment, opportunity to participate in Chamber Ensembles will also be a part of the regular orchestra \ncurriculum. Attendance at all performances is mandatory, including Fall, Winter and Spring concerts, district festivals, \nCalifornia Music Educators Association festivals, Solo-Ensemble festivals, feeder school concerts, regional and \nnational tours and community events. There are also opportunities for individuals to audition for the All-State Honor \nString and Symphony Orchestra. \nThis course is available for Career Technical Education credit to students in grades 11-12 with teacher approval.",
            "hw": "90 minutes per week outside of class practice. Performance and written assessments will be included in the curriculum.",
            "recCourses": "o For Entering Freshmen",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "CHAMBER ORCHESTRA",
                    "cid": "7030H"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Chamber Orchestra is an upper level course open by audition to all students who have played in the Gunn String \nOrchestra for at least one year. Auditions will be held in the spring and students will have the opportunity to view and \nwork on all audition materials except for the sight reading which will be only available at the time of the audition. \n\nThis course will focus on continued development of technical skills, tone production, tuning, rhythmic maturity, \nposture, bowing/articulation and ensemble rehearsal etiquette in a full ensemble setting. The study of music theory \nwill be embedded into the fabric of the warm-up and concert literature. \nOnce accepted to the class students will work with directors on advanced string orchestra and chamber orchestra \nliterature. The course is designed for students who have at least five years of playing experience on their instrument \nand who also work well in a fast paced musical environment. Students are expected to practice all materials outside \nof the class and be able to work well in small groups. Leadership and initiative are also expected as well as dedication \nto the artistic process and the musicians and directors that are working with the ensemble. There are also opportunities \nfor individuals to audition for Gunn’s Honors Symphony Orchestra, the All-State Honor String and Symphony \nOrchestra. \nThis ensemble is also a group that will travel for festivals and competitions and because of the balance of the ensemble \nstudents must be able to commit to travel. Financial aid will be available but students who have conflicts due to sports \nor other outside commitments should not audition.",
            "hw": "90-120 minutes per week of instrument practice and assignment completion on orchestra materials. This is in addition to outside instrument practice/private lessons if applicable.",
            "recCourses": "Successful completion of one (1) year in Gunn Orchestra, previous string instrument and orchestral experience",
            "slos": [
                "(1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7) \no Technical Skills (SLOs 1",
                "2",
                "6) \no Music Literacy",
                "History",
                "Creation (SLOs 1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7) \no Concert Skills (SLOs 1",
                "2",
                "6) \no Ensemble Skills (SLOs 2",
                "4",
                "6) \no Community & SEL (SLOs 1",
                "3",
                "6",
                "7)"
            ]
        },
        {
            "names": [
                {
                    "title": "SYMPHONY ORCHESTRA",
                    "cid": "6443"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approval Pending",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Symphony Orchestra Honors class will allow students to experience the wide canon of symphony orchestra \nrepertoire, with instrumentation across all band and orchestra instruments. There will also be a continued focus on \ntechnical skill development, tone production, tuning, rhythmic maturity, posture, articulation and ensemble rehearsal \netiquette in a full ensemble setting. The study of music theory will be embedded into the fabric of the warm-up and \nconcert literature. \n \nSymphony Orchestra Honors will be offered as an 8th Period course. It is open by application/audition to all students \nwho have played in a PAUSD Orchestra or Band for at least one year. Students enrolled in Symphony Orchestra must \nalso be concurrently enrolled in a band and orchestra course during the school day (Periods 1-7). This honors-level \ncourse is designed for students who have at least four years of playing experience on their instrument and who also \nwork well in a fast-paced musical environment. Auditions will be held in the spring and students will have the \nopportunity to view and work on all audition materials except for the sight reading which will be only available at the \ntime of the audition.",
            "hw": "90 minutes per week outside of class practice; both performance and written assessments will be included in the curriculum",
            "recCourses": "At least one year in a PAUSD Orchestra or Band class. Audition required for enrollment. Students must be concurrently enrolled in a Gunn Band or Orchestra",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "TREBLE CHOIR",
                    "cid": "7267"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Treble Choir is open to Sopranos and Altos who enjoy singing and desire to participate in a quality-singing group. \nThere will be strong emphasis on improving and increasing the vocal capabilities of the student. (A study of the basic \nmusic fundamentals—notes, rests, clefs, signatures, lines and spaces, rhythmic patterns, etc., will be included.) \nMusic will be drawn from our global heritage, including but not limited to the following musical cultures: African, \nAsian, Eastern and Western European, Indian, Middle Eastern, Latin American and North American. The chosen \nmusic will be sung in the language of each culture. As a result of having discussed, studied and performed the above, \nstudents will have a greater appreciation of cultural similarities and differences plus an increased awareness of the \nmany contributions, which enhance our lives. \nThere will be several performance opportunities for all: fall, winter and spring concerts, Choir Tours, Music Revues, \ndistrict/area festivals, Baccalaureate, solo/ensemble concerts and feeder school concerts. This course is open to grades \n9-12.",
            "hw": "Students will spend approximately 10-12 hours per quarter outside class time in extra rehearsals and performances. This averages out to about 1 hour per week.",
            "recCourses": "An interest in singing is necessary. However, no previous experience is required.",
            "slos": [
                "1",
                "2",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "CONCERT CHOIR",
                    "cid": "7218"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "The Concert Choir is open to students who enjoy singing and desire to participate in a quality singing group. There \nwill be a strong emphasis on vocal training, production, phrasing, and diction with special work devoted to extending \nthe vocal range of the singers. Basic music theory will be included to aid in the improvement of sight- reading. Both \nperformance and written tests will be included in the curriculum. Memorization of performance music and consistent \nattendance are required. \nMusic will be drawn from our global heritage, including, but not limited to, the following musical cultures: African, \nAsian, Eastern and Western European, Indian, Middle Eastern, Latin American, and North American. The chosen \nmusic will be sung in the language of each culture. As a result of having discussed, studied, and performed the above, \nstudents will have a greater appreciation of cultural similarities and differences plus an increased awareness of the \nmany contributions which enhance our lives. \nThere will be several performance opportunities for all: fall, winter and spring concerts, Choir Tours, Music Revues, \ndistrict/area festivals, Baccalaureate, alumni, solo/ensemble, feeder school concerts. Also, opportunities for individuals \nto audition for other ensembles and solos: Chamber Singers, Solos for concerts/shows, All-State Honor Choir and \nNational Honor Choirs. This course is available for Career Technical Education credit to students in grades 11-12 with \nteacher approval.",
            "hw": "Students will spend approximately 10-12 hours per quarter outside class time in extra rehearsals and performances. This averages out to about 1 hour per week.",
            "recCourses": "Treble Choir or by audition (open to 9 th grade Tenors/Basses)",
            "slos": [
                "1",
                "2",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "ADVANCED VOCAL",
                    "cid": "7226"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This group is open to students currently enrolled in Concert or Treble Choir who have had a minimum of a year of \ntraining and performance with a choral group and have auditioned for the group. The group meets evenings (with some \nspecial sectionals/rehearsals during lunch). It is a performance-oriented course, emphasizing vocal production, music\nreading skills and rehearsal and performance of repertoire appropriate for “chamber singing”; from madrigals to music \nof the Baroque, Classical, Romantic, Modern, and Contemporary periods along with works representative of other \ncultures of the world. This group will be expected to memorize music independently and to perform extensively.",
            "hw": "Students will spend approximately 10-12 hours per quarter outside class time in extra rehearsals and performances. This averages out to about 1 hour per week.",
            "slos": [
                "1",
                "2",
                "6"
            ],
            "notes": [
                "By audition only (AUDITIONS ARE HELD DURING THE FIRST WEEK OF SCHOOL)."
            ]
        },
        {
            "names": [
                {
                    "title": "AP MUSIC THEORY",
                    "cid": "7379"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "This course can be taken for AP credit if enrolled for the full year and all additional AP course work has been \ncompleted. \nBasic music theory, i.e., names of lines and spaces of the grand staff, clef signs, key and time signatures, note and rest \nvalues, and scales, both major and minor, will serve as an introduction to the course. \nEar training and dictation, sight-reading and sight-singing, form and analysis, and elementary orchestration will be \npart of the course. The harmony portion of the course will include the study of: chord structures, positions and \ninversions, harmonization of bass and soprano lines, use of the figured bass, and analysis of compositions for piano, \nchorus, and orchestra. \nAs a result of this study, students will be able to compose an original work and notate it correctly. This original \ncomposition will be performed in June and is required. This course is open to grades 11-12.",
            "hw": "20-45 minutes 3 times a week depending on the student’s musical background before entering the course. Each unit also has a composition assignment that requires additional time. A student with poor listening skills may need additional time outside of class to develop the necessary aural recognition skills required.",
            "recCourses": "Open to all students interested in the course. If a student is uncertain if their musical background is sufficient, they can take a pretest to determine their level of experience with musical notation.",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "THEATRE 1",
                    "cid": "1070"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Theatre 1 provides an introduction to theatre as a discipline and art form. Through theatre games and improvisation \nexercises, students will develop confidence, trust, and voice and movement skills. As they give and receive criticism \non performances in and outside of class, including scene and monologue work, students will apply evaluative criteria \nand appreciate excellence in performance. By studying theatre as an expression of both history and culture, students \nwill explore the way in which theatre affects and is affected by its societal context. This course is open to grades 9-12.",
            "hw": "Minimal homework",
            "slos": [
                "1",
                "2",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "THEATRE 2",
                    "cid": "1073"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Theatre 2 is designed for the intermediate student who wants to build upon the skills learned in Theatre 1. Through play \nanalysis, scene work, and one-act play preparation and performance, students will build believable characters, apply basic \ntechnical theatre skills, develop directing skills, and work effectively in an ensemble. Students will develop audition \n\nmaterial suitable for professional use. Students will trace the historical development of theatre through research, \nperformance, and attendance of theatrical productions.",
            "hw": "15 minutes per night",
            "recCourses": "Theatre 1",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "THEATRE 3",
                    "cid": "1076"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Theatre 3 is designed to build upon the skills learned in Theatre 1 and 2. Through participation in in-depth projects, \nstudents will apply directing, acting, technical, and dramaturgical skills. During these projects, they will write and \nadapt scripts and research societal contexts. By exploring different theatrical genres, students will evaluate and \nappreciate a variety of production styles including non-Western and non-traditional theatre. This course is open to \ngrades 11-12.",
            "hw": "15 minutes per night",
            "recCourses": "Theatre 2 and permission of instructor",
            "slos": [
                "1",
                "2",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "THEATRE 4",
                    "cid": "1097"
                }
            ],
            "grades": [
                12
            ],
            "length": "Year",
            "credit": "UC Approved “f”",
            "section": "VISUAL & PERFORMING ARTS",
            "description": "Theatre 4 provides an opportunity for students to pursue an individualized course of study, taking leadership roles in \nin-depth theatrical projects in their areas of interest. Students will locate their productions within a theatrical genre, \nemphasizing the historical and cultural influences on their project. Students will create unified production concepts, \nintegrating the contributions of the director, actor, designer, playwright, and spectator of a theatrical event. \nSENIOR PROJECT: Students who are selected to produce and direct a one-act production in the spring may have the \noption to use this as the focus for a senior project. Prior approval from the instructor is required. This course is open \nto grades 11-12.",
            "hw": "15 minutes per night",
            "recCourses": "Theatre 3 and permission of instructor",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        },
        {
            "names": [
                {
                    "title": "FRENCH 1",
                    "cid": "4110"
                },
                {
                    "title": "GERMAN 1",
                    "cid": "4210"
                },
                {
                    "title": "JAPANESE 1",
                    "cid": "4270"
                },
                {
                    "title": "MANDARIN CHINESE 1",
                    "cid": "4010"
                },
                {
                    "title": "SPANISH 1",
                    "cid": "4410"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "Level I World Language classes are designed for non-native speakers of the target language. The curriculum prepares \nstudents to: perform interpersonal, interpretive and presentational communicative tasks within the novice range of \nthe ACTFL Proficiency Guidelines; interpret, exchange, and present information, concepts and ideas both within the \nclassroom and beyond on a variety of topics including connections to other subject areas; and understand the \nrelationship among the products, practices and perspectives of the target culture(s) and other cultures. In addition, \nstudents develop insight into their own language and culture. Themes may include family, friends, home, school, food \nand customs, geography, seasons, weather, and travel.",
            "hw": "Up to 1 hour per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "FRENCH 2",
                    "cid": "4120"
                },
                {
                    "title": "GERMAN 2",
                    "cid": "4220"
                },
                {
                    "title": "JAPANESE 2",
                    "cid": "4275"
                },
                {
                    "title": "MANDARIN CHINESE 2",
                    "cid": "4020"
                },
                {
                    "title": "SPANISH 2",
                    "cid": "4420"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "Level II World Language classes are designed for non-native speakers of the target language. The curriculum prepares \nstudents to: perform interpersonal, interpretive and presentational communicative tasks within the novice high to \nintermediate low range on the ACTFL Proficiency scale; interpret, exchange, and present, information, concepts and \nideas both within the classroom and beyond on a variety of topics including connections to other subject areas; and \n\nunderstand the relationship among the products, practices and perspectives of the target culture(s) and other cultures. \nIn addition, students develop insight into their own language and culture. Themes may include family and friends, \nschool schedules, leisure activities, health, shopping, directions, buildings and monuments, places and events.",
            "hw": "Up to 1 hour per week",
            "recCourses": "Level 1 or department approval; grades 9-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "FRENCH 3",
                    "cid": "4130"
                },
                {
                    "title": "GERMAN 3",
                    "cid": "4230"
                },
                {
                    "title": "JAPANESE 3",
                    "cid": "4277"
                },
                {
                    "title": "MANDARIN CHINESE 3",
                    "cid": "4030"
                },
                {
                    "title": "SPANISH 3",
                    "cid": "4430"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "Level III World Language classes are designed for non-native speakers of the target language. The curriculum prepares \nstudents to: perform interpersonal, interpretive and presentational communicative tasks within the intermediate mid-\nrange on the ACTFL Proficiency Guidelines; interpret, exchange, and present information, concepts and ideas both \nwithin the classroom and beyond on a variety of topics including connections to other subject areas; and understand \nthe relationship among the products, practices and perspectives of the target culture(s) and other cultures. In addition, \nstudents develop insight into their own language and culture. Themes may include family and friends, preferred \nactivities, healthy lifestyles, professions and work, developments in technology, history, art, literature, music, and \nglobal challenges.",
            "hw": "Up to 1.5 hours per week",
            "recCourses": "Level 2 or department approval; grades 9-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "MANDARIN CHINESE CIVILIZATION & CULTURE H",
                    "cid": "4041"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "This course provides students with the opportunity to continue to demonstrate proficiency in Mandarin Chinese at \nthe Intermediate High to Advanced-low range in each of the 3 modes of communication on the ACTFL Proficiency \nGuidelines. Students analyze the historical, political, and social issues of the Mandarin-speaking world using authentic \nliterary texts, films, music, art, and mass media. Students also have the opportunity to explore the wide range of \ncultures in the world where Mandarin is spoken (China, Taiwan, Singapore, etc.). Language skills are developed \nthrough oral presentations, research projects, and reflections on literary and non-literary texts. Students are \nencouraged to independently and deeply explore and research topics of interest to them.",
            "hw": "Up to 1 hour per week",
            "recCourses": "Chinese 3 or department approval; grades 9-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "SPANISH CIVILIZATION & CULTURE H",
                    "cid": "4441"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "This honors course provides students with the opportunity to continue to demonstrate their proficiency in Spanish at \nthe Intermediate High to Advanced-Low range in each of the 3 modes of communication on the ACTFL Proficiency \nGuidelines. Students analyze the historical, political, and social issues of the Spanish-speaking world using authentic \nliterary texts, films, music, art, and mass media. Students also have the opportunity to explore the wide range of \ncultures in the world where Spanish is spoken (Spain, Africa, Caribbean Islands, Central and South America, etc.) \nLanguage skills are developed through oral presentations, research projects, and reflections on literary and non-literary \ntexts. Students are encouraged to explore and research, in more depth, topics of interest to them.",
            "hw": "Up to 1 hour per week",
            "recCourses": "Spanish 3 or department approval; grades 9-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP FRENCH LANGUAGE & CULTURE",
                    "cid": "4149"
                },
                {
                    "title": "AP GERMAN LANGUAGE & CULTURE",
                    "cid": "4249"
                },
                {
                    "title": "AP JAPANESE LANGUAGE & CULTURE",
                    "cid": "4290"
                },
                {
                    "title": "AP MANDARIN CHINESE LANGUAGE & CULTURE",
                    "cid": "4029"
                },
                {
                    "title": "AP SPANISH LANGUAGE & CULTURE",
                    "cid": "4449"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "The AP Language and Culture courses provide students with opportunities to demonstrate their proficiency at the \nintermediate to pre-advanced range in each of the 3 modes of communication on the ACTFL Proficiency Guidelines. \nStudents are expected to: engage in spoken and written interpersonal communication; synthesize information from a \nvariety of authentic audio or audiovisual resources; synthesize information from a variety of authentic written and \nprint resources; plan, produce and present spoken and written presentations. The 6 broad themes of study include \nbeauty and aesthetics, contemporary life, families and communities, global challenges, personal and public identities, \nand science and technology.",
            "hw": "Up to 2 hours per week",
            "recCourses": "Level 3 or department approval; grades 10-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "FRENCH CIVILIZATION & CULTURE",
                    "cid": "4154"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "This course provides students with the opportunity to continue to demonstrate their proficiency in French at the \nIntermediate High to Advanced Low range in each of the 3 modes of communication on the ACTFL Proficiency \nGuidelines. Students analyze the historical, political, and social issues of the French-speaking world using authentic \nliterary texts, films, music, art, and mass media. Students also have the opportunity to explore the wide range of \n\ncultures in the world where French is spoken (Europe, Africa, Caribbean islands, Southeast Asia, etc.). Language skills \nare developed through oral presentations, research projects, and reflections on literary and nonliterary texts. Students \nare encouraged to explore and research in more depth topics of interest to them.",
            "hw": "Up to 2 hours per week",
            "recCourses": "French AP Language or department approval; grades 11-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP SPANISH LITERATURE & CULTURE",
                    "cid": "4459"
                }
            ],
            "grades": [
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “e”",
            "section": "WORLD LANGUAGES",
            "description": "The AP Spanish Literature and Culture course uses a thematic approach to introduce students to representative texts \n(short stories, novels, poetry, and essays) from Peninsular Spanish, Latin American, and United States Hispanic \nliterature. Students develop proficiencies across the full range of communication modes (interpersonal, presentational, \nand interpretive), thereby honing their critical reading and analytical writing skills. Literature is examined within the \ncontext of its time and place, as students reflect on the many voices and cultures present in the required readings. The \ncourse also includes a strong focus on cultural connections and comparisons, including exploration of various media \n(e.g. art, film, literary criticism).",
            "hw": "Up to 2 hours per week",
            "recCourses": "Spanish AP or department approval; grades 10-12",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "FOCUS ON SUCCESS",
                    "cid": "2010"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "NOT UC Approved",
            "section": "WORLD LANGUAGES",
            "description": "Focus on Success is an award-winning study and life skills elective, designed to support students in their core academic \nclasses. FOS strategies highlight executive functioning techniques such as organization, time management, study skills, \ngoal setting, and healthy lifestyle. Additionally, FOS provides dedicated homework time and support from subject-\nspecific tutors.",
            "hw": "None",
            "recCourses": "Interview; open to all grades",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "LIVING SKILLS",
                    "cid": "8458"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Semester",
            "credit": "NOT UC Approved",
            "section": "GENERAL CREDIT COURSES",
            "description": "This course provides students with the skills and knowledge that will help them to make informed and responsible \ndecisions about issues that affect personal health and well-being. Subjects of study include identity, influences, \nindividuality, communication, brain development, health, drug and sex education. \nThis fulfills the high school graduation requirement and state CPR/AED requirement. 15 hours of community service \nrequired.",
            "hw": "1 hour per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "SCHOOL SERVICE",
                    "cid": "8385 Semester 1"
                },
                {
                    "title": "SCHOOL SERVICE",
                    "cid": "8386 Semester 2"
                },
                {
                    "title": "TEACHING ASSISTANT",
                    "cid": "0676 Semester/Year"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "credit": "NOT UC Approved",
            "section": "GENERAL CREDIT COURSES",
            "description": "Offers the student an opportunity to give valuable service to the school and gain valuable experience in the process. \nWhile students who have some clerical skills are needed, those students who may be thinking of teaching as a career \nshould be most interested. In this program they will be given the opportunity to work with teachers in the classroom \nand school offices in their particular fields of interest, thus gaining a better understanding of teaching as a career. They \nwill also work with experienced office personnel, helping in the preparation and handling of educational materials. \nThis course may be taken for a semester or a year and is open to students of all grade levels. \nStudents who take this class will receive a grade of “Pass” or “No Credit.”",
            "hw": "None",
            "slos": [
                "1",
                "2",
                "4",
                "5",
                "7"
            ]
        },
        {
            "names": [
                {
                    "title": "AP SEMINAR",
                    "cid": "8401"
                }
            ],
            "grades": [
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “b”",
            "section": "GENERAL CREDIT COURSES",
            "description": "AP Seminar, an interdisciplinary offering from the College Board, is the first of two courses in the AP Capstone \nprogram. The course offers the foundational research and writing skills students will need for college-level and \nprofessional work. The course focuses on the process-oriented skill sets rather than on content specific to a particular \ndiscipline. Students will synthesize and articulate research on any number of subjects into formally presented \narguments, both written, multi-media, and oral. There is also a large collaborative component of the course, as students \nwork in teams to present their findings. Similar to a \"First-Year\" seminar experience in college, students will engage in \ncross-curricular conversations that explore the complexities of academic and real-world topics and issues by analyzing \ndivergent perspectives (scientific, economic, political, cultural). Students should be strong readers of non-fiction \nprimary texts, fluent writers and team players.",
            "hw": "3 to 4 hours per week",
            "slos": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ],
            "notes": [
                "Please see page 28 in the CTE section of the course catalog for information about AAR (8429)",
                "For more information, please visit http://aar.pausd.org/"
            ]
        },
        {
            "names": [
                {
                    "title": "STUDENT GOVERNMENT - ASB",
                    "cid": "8390"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "GENERAL CREDIT COURSES",
            "description": "For elected officers only. \nAll elected and appointed Associated Student Body (ASB) Officers will be enrolled in this course for the length of their \nterm. Over the course of the year, Leadership students should expect to perform their specific Gunn ASB \nConstitutional roles as well as participate in leadership activities chosen by both the Student Executive Council and \nthe teacher. This course is only open to current elected and appointed ASB officers at this time. Election and \nAppointment Applications will be available in February/March of the current school year.",
            "prereqs": "Teacher and administrative recommendation, appointment or election to ASB office"
        },
        {
            "names": [
                {
                    "title": "STUDENT GOVERNMENT - LEADERSHIP",
                    "cid": "8390L"
                }
            ],
            "grades": [
                9,
                10,
                11,
                12
            ],
            "length": "Year",
            "credit": "UC Approved “g”",
            "section": "GENERAL CREDIT COURSES",
            "description": "This course is for any student interested in student leadership on campus as well as potentially running for or applying \nfor an ASB officer role on the Student Executive Council. Leadership is a project-based course aimed at increasing \nstudents’ leadership capabilities. Through the planning and execution of numerous events for the school, students will \ndiscover how to best effect change in their school communities. Students will read about the nature of leadership and \nits different styles. Students will write - critically, reflectively, persuasively - and speak about the real world issues that \narise from the planning of events. \nLeadership has two goals: \n1. Increase the positive school culture through academic and social events. \n2. Help students enrolled in the class become effective leaders. \nStudents will create a leadership portfolio, synthesizing their learning for the year. Students do not need to be holding \nan elected or appointed position to take this course."
        }
    ]
}
export default courses;
