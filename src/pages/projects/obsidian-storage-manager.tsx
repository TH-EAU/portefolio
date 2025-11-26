import PageLayout from "@/components/layout/page-layout"
import { Heading, Image, Text } from "@chakra-ui/react"

const ObsidianStorageManagerPage = () => {
    return (
        <PageLayout pageName="Obsidian Storage Manager" caption="/portfolio/osm_caption.jpg" description="Un pulgin pour créer des bases de données dans obsidian" tags={["obsidian", "TS", "PostgreSql", "React Query"]} >
            <Heading>Le projet</Heading>
            <Text>Je préfère Obsidian à la plupart des logiciels ou SaaS de prise de notes. Le fait qu’il soit en local et entièrement open‑source est vraiment un point important pour moi. Qui dit logiciel gratuit dit fonctionnalités un peu moins évoluées, mais heureusement les plugins et la communauté sont là pour nous apporter ce qui manque à ce bijou.</Text>
            <Text>Pour autant, une fonctionnalité qui me manque et que j’apprécie beaucoup, et que l’on retrouve chez Notion, c’est la possibilité de créer des bases de données. Aujourd’hui, un plugin Database existe pour Obsidian mais il est basé sur des documents. Aucun plugin ne permet encore de créer une table et d’y ajouter des données à l’intérieur.</Text>
            <Text>C’est ce que mon plugin vient ajouter à Obsidian. Dans sa forme actuelle, peu avancée, mon plugin se connecte à un PostgreSQL pour fonctionner, mais j’ai prévu, à l’avenir, de le faire évoluer pour y intégrer une base de données SQLite.</Text>
            <Image src="/portfolio/osm_home.png" />
            <Image src="/portfolio/osm_data.png" />

        </PageLayout>
    )
}

export default ObsidianStorageManagerPage