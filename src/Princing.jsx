import React from "react";
import TitreH2 from "./titreH2";
import PricingComponent from "./PricingComponent";
import Button from "./components/Button";

export default function Princing() {
  const baseBranding = [
    "Identité de marque (2 pistes)",
    "Logo, couleurs & typos",
    "Charte graphique",
    "Bannières réseaux sociaux",
    "Flyers",
  ];
  const baseBrandingWeb = [
    "Identité de marque (2 pistes)",
    "Logo, couleurs & typos",
    "Charte graphique",
    "Bannières réseaux sociaux",
    "Design Figma sur-mesure",
    "Développement de sites web",
    "Optimisation SEO",
    "Gestion de contenu",
    "Intégration de réseaux sociaux",
    "Gestion de comptes Google Analytics",
    "Flyers",
  ];
  const baseWeb = ["Design Figma sur-mesure"];
  const princingList = [
    {
      title: "Branding",
      sutitle: "Base branding",
      paragprahe:
        "Une identité de marque complète, intemporelle et prête à l'emploi",
      price: "4990",
      list: [
        {
          icon: "V",
          list: [
            "Identité de marque (2 pistes)",
            "Logo, couleurs & typos",
            "Charte graphique",
            "Bannières réseaux sociaux",
            "Flyers",
          ],
        },
        {
          list: [
            "Design sur Figma sur-mesure",
            "Développement de sites web",
            "Optimisation SEO",
            "Gestion de contenu",
            ,
          ],
        },
      ],
    },
    {
      title: "Branding + Web",
      sutitle: "Base branding + web",
      paragprahe:
        "Une identité de marque + un site marketing orienté conversion",
      price: "9490",
      stroke: true,
      list: [
        {
          icon: "V",

          list: [
            "Identité de marque (2 pistes)",
            "Logo, couleurs & typos",
            "Charte graphique",
            "Bannières réseaux sociaux",
            "Design sur Figma sur-mesure",
            "Développement de sites web",
            "Optimisation SEO",
          ],
        },
      ],
    },
    {
      title: "Web",
      sutitle: "Base web",
      paragprahe:
        "Votre site marketing one-page all-inclusive orienté conversion",
      price: "4990",
      list: [
        {
          icon: "V",
          list: [
            "Design sur Figma sur-mesure",
            "Développement de sites web",
            "Optimisation SEO",
            "Gestion de contenu",
            "Intégration de réseaux sociaux",
            "Gestion de comptes Google Analytics",
          ],
        },
        {
          list: [
            "Identité de marque (2 pistes)",
            "Logo, couleurs & typos",
            "Charte graphique",
            "Bannières réseaux sociaux",
            "Flyers",
          ],
        },
      ],
    },
  ];
  return (
    <div id="princing" className="mt-72 lg:mt-80  mx-10 md:mx-20  ">
      <TitreH2
        text1={"Avec nous, pas de bulshit."}
        text2={"Les prix sont fixes"}
      />

      <div className="w-full flex mt-24 justify-center items-center">
        <div className="flex w-fit gap-12 items-center justify-center gap flex-col">
          <div className="flex w-full flex-col gap-4 lg:flex-row items-  justify-between">
            {princingList.map((item) => (
              <PricingComponent
                price={item.price}
                listText={item.list}
                stroke={item.stroke}
                title={item.title}
                paragraphe={item.paragprahe}
                subtitle={item.sutitle}
              />
            ))}
          </div>
          <div className="flex justify-end w-full ">
            <div className="flex flex-col content-end  gap-2 justify-end items-end ">
            <h3 className=" font- text-[#7D7D7D] font-urbanist text-lg ">
                Préferer parler par mail ?
              </h3>
              <Button text={"Envoyer un mail"} />
            </div>
             
        

            
          </div>
        </div>
      </div>
    </div>
  );
}
