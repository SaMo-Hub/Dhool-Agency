import React, { useEffect, useRef } from 'react'
import TitreH2 from './titreH2'
import FaqComponent from './FaqComponent'
import gsap from 'gsap';

export default function FAQ() {

  const faqList = [
    {
      title: "Est-ce que vous faites des landing pages ?",
      paragraphe:
        "Oui, nous réalisons ce qui est communément appelé des “landing pages”. Cependant, nous préférons aujourd’hui parler de “sites marketing one-page”, car ce terme reflète mieux la qualité et la complexité de notre travail.<br/><br/>Contrairement à une simple landing page, qui est souvent une page ajoutée à un site existant, nos sites marketing one-page sont des solutions conçues sur-mesure, depuis zéro, pour offrir une expérience unique et cohérente.<br/><br/>Ils intègrent des éléments essentiels comme un design soigné, une structure optimisée pour la conversion, et parfois même des fonctionnalités plus avancées, selon vos objectifs.<br/><br/>Ainsi, si vous cherchez à créer un outil puissant pour promouvoir un produit, un service ou une campagne spécifique, nous sommes parfaitement équipés pour répondre à vos besoins. Vous obtiendrez bien plus qu’une simple landing page, mais plutôt un véritable atout marketing pensé pour engager, convertir et servir votre marque."
    },
    {
      title: "Combien de temps dure une prestation ?",
      paragraphe:
        "Nos prestations durent 3 à 5 semaines pour les bases Starter (identité de marque) et Boost (Site marketing), et 8 à 10 semaines pour le pack Take off qui combine les deux.<br/><br/>Les délais peuvent varier en fonction des aller-retours, des retouches, de changements de direction, etc. Nous pouvons garantir les délais de notre côté mais nous attendons de votre côté la plus grande réactivité possible pour les maintenir.<br/><br/>Dans le cas où vous choisissez des suppléments, les délais seront raisonnablement rallongés.<br/><br/>Réservez un appel via l’encart juste à droite afin de savoir combien de temps cela prendrait pour vous !"
    },
    {
      title: "Puis-je vous régler en plusieurs fois ?",
      paragraphe:
        "Il est bien sûr possible de régler en plusieurs fois et nous ne voulons pas que le prix ni le budget ne soient un frein pour que vous démarriez avec nous !<br/><br/>La seule chose sur laquelle nous sommes fixes sera le règlement d’un acompte de 50% pour démarrer la prestation, pour le reste nous pouvons nous adapter via un paiement en 2x, 3x ou 4x.<br/><br/>Réservez un appel via l’encart à droite afin de voir comment nous pouvons adapter nos conditions de paiement à votre cas particulier."
    },
    {
      title: "Je suis prêt·e, comment faire pour démarrer avec vous ?",
      paragraphe:
        "Pour démarrer avec nous, rien de plus simple :<br/><br/>Procédez au paiement en 1x directement sur le site en moins de 5 minutes en cliquant sur l’offre qui vous intéresse et économisez en moyenne 10% sur la prestation.<br/><br/>Ou réservez un appel via l’encart à droite pour que nous répondions à vos dernières questions. Nous vous proposerons alors un paiement en direct (-10%) ou en plusieurs fois avec acompte de 50%."
    },
    {
      title: "Quelles sont vos modalités de paiement ?",
      paragraphe:
        "Vous pouvez procéder au paiement via un lien sécurisé Stripe directement sur notre site et bénéficier de -10% (cliquez sur l’offre qui vous intéresse), ou bien par virement directement en appel avec nous.<br/><br/>Nous pouvons aménager les échéances de paiement en fonction de vos besoins afin que cela ne soit pas un frein pour que vous puissiez démarrer avec nous.<br/><br/>Réservez un appel via l’encart à droite pour comprendre comment cela s’applique à vous."
    },
    {
      title: "Est-ce que vous faites aussi du design produit et UI/UX ?",
      paragraphe:
        "Notre équipe est constituée de designers UI/UX ce qui nous permet de couvrir 100% de vos besoins à ce sujet. Pas besoin donc de chercher un product designer si vous souhaitez travailler avec nous !<br/><br/>Nous pouvons ajouter le design produit & UI/UX à une de nos formules à partir de 3000€ de budget, et faire uniquement le design produit sans passer par nos formules à partir de 5000€ de budget.<br/><br/>Réservez un appel avec nous via l’encart à droite pour comprendre comment nous pouvons vous aider à concevoir l’interface de votre SaaS ou application mobile."
    },
    {
      title: "Est-ce que vos landing pages sont optimisées pour le SEO ?",
      paragraphe:
        "Nous optimisons chacune de nos pages pour le référencement Google directement sur Webflow grâce à un ensemble de bonnes pratiques qui nous permettent d’obtenir un score élevé par les outils de scoring.<br/><br/>Cependant, nous faisons le parti pris de ne pas travailler les mots-clés et le positionnement dans les recherches Google car nous rédigeons nos pages pour pousser à l’action.<br/><br/>Nous partons du principe que vous générez déjà du trafic vers votre page web et que son objectif est de CONVERTIR et non pas d’amener du trafic. Travailler sur des mots-clés créerait donc un conflit d’objectif sur la landing page.<br/><br/>Dans le cas où le référencement et la construction de pages annexes sont un enjeu pour vous, nous pouvons nous en charger grâce à nos multiples partenaires spécialistes en SEO.<br/><br/>Pour discuter de vos enjeux SEO et référencement, réservez un appel via l’encart à droite."
    },
    {
      title: "Comment se déroule la prestation ?",
      paragraphe:
        "Dès que le paiement est enregistré, vous serez ajouté à un espace de communication où l’équipe se présentera. Vous recevrez ensuite le lien de votre portail personnel où vous pourrez suivre l’intégralité de la prestation et recevoir vos documents de manière asynchrone.<br/><br/>Suivez les étapes et le pourcentage d’avancée du projet sur l’espace, et réservez un appel à n’importe quel moment sans limite si vous avez la moindre question !<br/><br/>Pour en savoir plus sur la façon dont se déroule la prestation, réservez un appel via l’encart à droite."
    }
  ];
  
  const textRef = useRef(null);
  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll("span"); // Sélectionne chaque mot

    gsap.fromTo(
      words,
      { opacity: 0, y: 50, filter: "blur(10px)" }, // Départ en bas et flou
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.08, // Décalage de 0.15s entre chaque mot
        
      }
    );
  }, []);
  return (
    <div id='faq' className='mx-10 md:mx-20 gap-x-10  gap-10 justify-between pb-24 lg:flex-row flex-col flex mt-72 lg:mt-80 '>
      <TitreH2 textRefs={textRef} text1={"Vous avez"} text2={"une question ?"}/>
      
        <div className=''>
            <div className='flex font-urbanist mb-6 text-xl font-medium'>
                <h3>
                    Oui,mais...
                </h3>
            </div>
            <div className='flex  flex-col gap-2'>
              {faqList.map((item)=> (
                <FaqComponent title={item.title} paragraphe={item.paragraphe}/>
              ))}
            </div>
        </div>
    </div>
  )
}
