import React from 'react';
import '../design/Pricing.css';

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
            <h2>Abonnements</h2>
            <div className="pricing-container">
                <div className="pricing">
                    <h3>Offre Gratuite</h3>
                    <p>Offre découverte 30 jours</p>
                </div>
                <div className="pricing">
                    <h3>Offre Medium</h3>
                    <p>15€ par mois</p>
                    <p>Du Lundi au Vendredi</p>
                </div>
                <div className="pricing">
                    <h3>Offre Premium</h3>
                    <p>35€ / mois</p>
                    <p>Protection et Sécurité avancées</p>
                </div>
                <div className="pricing">
                    <h3>Offre Optimum</h3>
                    <p>50€ / mois</p>
                    <p>Protection et Sécurité 24/24  7/7</p>
                </div>
            </div>
        </section>
  );
}
