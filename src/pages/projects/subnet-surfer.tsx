import PageLayout from "@/components/layout/page-layout"
import { Text, Heading, Image, Link } from "@chakra-ui/react"

const SubnetSurferPage = () => {
    return (
        <PageLayout caption="/portfolio/subnet_surfer_caption.jpg" pageName="Subnet Surfer" description="Utilitaire de calcul de masque de sous-réseaux" tags={["Terminé", "JS"]}>
            <Heading >Le projet</Heading>
            <Text>Dans le cadre de l’enseignement, j’ai réalisé un petit site qui permet de calculer et de visualiser le fonctionnement des masques de sous‑réseau.</Text>
            <Text>Il est accessible à cette addresse :</Text>
            <Link target="_blank" href="https://th-eau.github.io/subnet-surfer/" >Subnet Surfer</Link>
            <Image src="/portfolio/subnet_surfer.png" />
        </PageLayout>
    )
}

export default SubnetSurferPage