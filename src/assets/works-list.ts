import type Work from "@/models/work";
import { ProjectStatus } from "@/models/work";
import CssGlassesPage from "@/pages/projects/css-glasses";
import MicroMarketSimulator from "@/pages/projects/micromarket-simulator";
import NextraDocsBoilerplatePage from "@/pages/projects/nextra-docs-boilerplate";
import ObsidianStorageManagerPage from "@/pages/projects/obsidian-storage-manager";
import SubnetSurferPage from "@/pages/projects/subnet-surfer";
import VRHeadsetPage from "@/pages/projects/vr-headset";

const workList: Work[] = [
    {
        name: "Casque VR",
        slug: "vr-headset",
        caption: "/portfolio/vr_caption.jpg",
        overview: "Conception d'un casque de réalité virtuel",
        captionAlt: "Photo de <a href='https://unsplash.com/fr/@jamesyarema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>James Yarema</a> sur <a href='https://unsplash.com/fr/photos/appareil-numerique-bleu-et-noir-npTT9rD8wd4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
        tags: ["VR", "3D", "C#", "Unreal Engine"],
        page: VRHeadsetPage,
        status: ProjectStatus.FINISHED
    },
    {
        name: "Obsidian Storage Manager",
        slug: "obsidian-storage-manager",
        caption: "/portfolio/osm_caption.jpg",
        overview: "Plugin obsidian pour intégrer des bases de données",
        captionAlt: 'Photo de <a href="https://unsplash.com/fr/@resourcedatabase?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Resource Database</a> sur <a href="https://unsplash.com/fr/photos/un-cube-blanc-qui-flotte-dans-les-airs-mpXAVvxfxDg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        status: ProjectStatus.PENDING,
        tags: ["Obsidian", "TS"],
        page: ObsidianStorageManagerPage
    },
    {
        name: "Nextra Docs Boilerplate",
        slug: "nextra-docs-boilerplate",
        caption: "/portfolio/ndb_caption.png",
        overview: '',
        captionAlt: "capture d'écran de Nextra",
        status: ProjectStatus.PENDING,
        tags: ["Obsidian", "TS"],
        page: NextraDocsBoilerplatePage
    },
    {
        name: "SubnetSurfer",
        slug: "subnet-surfer",
        caption: "/portfolio/subnet_surfer.png",
        overview: "Utilitaire de calcul de masque de sous-réseaux",
        captionAlt: 'Photo de <a href="https://unsplash.com/fr/@rylo444?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Loughlin</a> sur <a href="https://unsplash.com/fr/photos/personne-surfant-au-coucher-du-soleil-HXqpJnLyHzg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        status: ProjectStatus.FINISHED,
        tags: ["Obsidian", "TS"],
        page: SubnetSurferPage
    },
    {
        name: "CSS Glasses",
        slug: "css-glasses",
        caption: "/portfolio/css_glasses_caption.jpg",
        captionAlt: 'Photo de <a href="https://unsplash.com/fr/@luminos_film?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luminos film</a> sur <a href="https://unsplash.com/fr/photos/une-paire-de-lunettes-v0NvWynzF3I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        overview: 'Extension chrome pour lire le css',
        status: ProjectStatus.FINISHED,
        tags: ["Obsidian", "TS"],
        page: CssGlassesPage
    },
    {
        name: "MicromarketSimulator",
        slug: "micromarket-simulator",
        caption: "/portfolio/micro_complete.png",
        captionAlt: "Capture d'écran de mircomarket simulator",
        overview: "Un mini jeu en React-Three-Fiber",
        tags: ["game", "3D", "WebGL"],
        page: MicroMarketSimulator,
        status: ProjectStatus.PENDING
    },

]

export default workList