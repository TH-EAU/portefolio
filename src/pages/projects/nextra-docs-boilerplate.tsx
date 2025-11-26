import PageLayout from "@/components/layout/page-layout"
import { Heading, Image, Stack, Text } from "@chakra-ui/react"

const NextraDocsBoilerplatePage = () => {
    return (
        <PageLayout pageName="Nextra docs boilerplate" description="Une boilerplate pour un Nextra en MDX sur github pages" tags={["Nextra", "Next", "TS"]} caption="/portfolio/ndb_caption.png" >
            <Stack>
                <Heading>Le projet</Heading>
                <Text>Nextra est une excellente solution professionnelle et open‑source pour créer de la documentation. La fonctionnalité que j’apprécie le plus est le support du format MDX, un format hybride entre du Markdown et du JavaScript, qui permet d’intégrer des composants React dans des pages écrites en Markdown !</Text>
                <Text>L’intérêt est tout trouvé pour moi : lorsque je crée des supports de cours, j’aime les publier sur Internet et je profite de la possibilité de créer des composants dynamiques pour illustrer des démonstrations ou simplement des interactions.</Text>
                <Text>Vous le voyez venir : qui dit Markdown dit Obsidian avec moi !</Text>
                <Text>Ce projet est donc une boilerplate destinée à toute personne souhaitant disposer d’une solution alternative et extrêmement personnalisable à Obsidian Sync.</Text>
                <Text>Il vous suffit de créer un dépôt Git et de publier le contenu de votre vault Obsidian sur une page GitHub grâce à la commande <code>npm run deploy</code>.</Text>
                <Text>Et oui ! Vous l’aurez peut‑être remarqué, mais Nextra est basé sur Next.js, qui ne peut pas être déployé directement sur une page GitHub (seules les pages statiques le sont). Cependant, il est possible de builder un projet Next en mode statique. On perd alors l’essentiel des avantages de Next, mais comme mon objectif est de profiter des fonctionnalités de Nextra, cela ne pose aucun problème.</Text>
            </Stack>
            <Stack>
                <Heading>Limites</Heading>
                <Text>En l’état, ce projet constitue une véritable alternative, mais il présente trop de frictions à l’utilisation et n’est donc pas adapté à tous. Parmi les principaux défauts, voici les plus dérangeants :</Text>
                <Text>- Le système de routage de la version la plus récente de Next n’est pas adapté à un vault Obsidian. Les pages s’appellent toutes <code>pages.mdx</code> et doivent être accompagnées de <code>properties</code> qui déterminent le titre de la page et sa visibilité. Autant dire que, parfois, utiliser Visual Studio Code avec un plugin Markdown est plus agréable.</Text>
                <Text>- Le deuxième défaut découle directement du premier : le fait d’utiliser Obsidian ne permet pas d’obtenir de l’autocomplétion lors de l’écriture de composants React.</Text>
                <Text>- Il faut également recourir à un terminal externe pour publier le site, ce qui incite à revenir à un IDE classique.</Text>
                <Text>- Enfin, il faut connaître assez bien le code pour exploiter mon projet, tant en React qu’en configuration d’environnement, ainsi qu’un peu en DevOps. Bien que les pages GitHub soient extrêmement simples à configurer, des erreurs complexes peuvent survenir pour quelqu’un qui n’a d’autre expérience que React.</Text>
            </Stack>
            <Stack>
                <Heading>Solutions</Heading>
                <Text>Ici, on voit clairement que la friction provient de l’utilisation d’Obsidian dans le projet. Malgré le fait que cela soit à l’origine de ma motivation, il faut faire évoluer le sujet pour le rendre utilisable. C’est pourquoi, comme première solution, j’ai décidé de supprimer les liens avec Obsidian et de proposer une boilerplate qui permette à chacun d’utiliser le logiciel de son choix pour écrire le Markdown, offrant ainsi un produit efficace et parfaitement intégrable à tout type de solution.</Text>
                <Text>Parallèlement, j’ai développé des éléments qui permettront d’utiliser mon projet avec Obsidian :</Text>
                <Text>- Un plugin qui facilite la mise en ligne du contenu du vault.</Text>
                <Text>- Une refonte du système de routing (soit en réalisant des correspondances manuelles, ce que je fais déjà, soit en revenant à l’ancien système de routing, peut‑être plus adapté).</Text>
                <Text>- Une bibliothèque de composants prête à l’emploi et extensible sous forme d’alias Obsidian, qui permettrait de rester dans le flux Obsidian sans devoir constamment basculer entre VS Code et Obsidian. Il faudrait également créer un mécanisme qui ajoute automatiquement les dépendances dans le fichier MDX lors de l’appel de l’alias.</Text>
            </Stack>
            <Image src="/portfolio/ndb_exemple.png" />
        </PageLayout>
    )
}

export default NextraDocsBoilerplatePage