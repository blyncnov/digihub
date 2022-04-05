import Project from "../public/Images/assests/nextfood.png"
import Project1 from "../public/Images/assests/ishortner.png"
import Project2 from "../public/Images/assests/wpost.png"
import Project3 from "../public/Images/assests/xdome2.png"


export const AllProjectData = [
    {
        id: 0,
        ProjectName: "NextFood Template",
        ProjectTechUsed: [
            "React Js",
            "Next js",
            "Styled-Components",
            "Vercel"
        ],
        ProjectDescription: "A web app for Food Website template. Dope Ul recently played best on Youtube, and detailed information insight about everything .",
        ProjectImage: Project,
        ProjectUrl: "https://nextfood.vercel.app",
        order: 0,
    },
    {
        id: 1,
        ProjectName: "Ishortner",
        ProjectTechUsed: [
            "React Js",
            "styled-Components",
            "Netlify"
        ],
        ProjectDescription: "A web app for Food Website template. Dope Ul recently played best on Youtube, and detailed information insight about everything .",
        ProjectImage: Project1,
          ProjectUrl: "https://ishortner.netlify.app/",
        order: 1,
    },
    {
        id: 2,
        ProjectName: "Wpost ",
        ProjectTechUsed: [
            "React Js",
            "styled-Components",
            "Netlify"
        ],
        ProjectDescription: "A web app for Food Website template. Dope Ul recently played best on Youtube, and detailed information insight about everything .",
        ProjectImage: Project2,
          ProjectUrl: "https://wpost.netlify.app/",
        order: 0,
    },
        {
        id: 3,
        ProjectName: "Xdome Todo Application ",
        ProjectTechUsed: [
            "Next Js",
            "styled-Components",
            "Redux toolkit",
            "vercel",
        ],
        ProjectDescription: "A web app for Food Website template. Dope Ul recently played best on Youtube, and detailed information insight about everything .",
            ProjectImage: Project3,
          ProjectUrl: "https://xdome.vercel.app/",
        order: 1,
    }
]

export default AllProjectData