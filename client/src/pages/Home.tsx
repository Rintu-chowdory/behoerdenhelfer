import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { CheckCircle2, FileText, Clock, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design: Minimalistisches Vertrauens-Design
 * - Hero-Sektion mit Behördenblau und Vertrauens-Signalen
 * - Asymmetrisches Layout mit Feature-Karten
 * - Subtile Animationen und Hover-Effekte
 */

export default function Home() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "Checklisten Generator",
      description: "Personalisierte Checklisten für Ihre Behördengänge. Schritt-für-Schritt Anleitung für Wohnanmeldung, Versicherungen, Steuern und mehr.",
      icon: CheckCircle2,
      path: "/checklist-generator",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Dokument Erklärer",
      description: "Komplexe deutsche Behördendokumente einfach erklärt. Wir übersetzen Behördendeutsch in verständliche Sprache.",
      icon: FileText,
      path: "/document-explainer",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Fristen Manager",
      description: "Automatische Erinnerungen für wichtige Fristen. Verpassen Sie keine Deadline mehr für Anträge, Verlängerungen oder Registrierungen.",
      icon: Clock,
      path: "/deadline-reminders",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  const audiences = [
    { emoji: "🌍", label: "Expats", desc: "Für internationale Fachkräfte und Auswanderer" },
    { emoji: "🎓", label: "Studierende", desc: "Für Studierenden aus dem In- und Ausland" },
    { emoji: "💼", label: "Neue Arbeitskräfte", desc: "Für Berufsanfänger und Umzügler" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">§</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
                Behördenhelfer
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => navigate("/checklist-generator")}
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                Checklisten
              </button>
              <button
                onClick={() => navigate("/document-explainer")}
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                Dokumente
              </button>
              <button
                onClick={() => navigate("/deadline-reminders")}
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                Fristen
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
              <button
                onClick={() => {
                  navigate("/checklist-generator");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Checklisten
              </button>
              <button
                onClick={() => {
                  navigate("/document-explainer");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Dokumente
              </button>
              <button
                onClick={() => {
                  navigate("/deadline-reminders");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Fristen
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Deutsche Bürokratie
                  <span className="block text-blue-700">einfach gemacht</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Navigieren Sie mühelos durch deutsche Behördenprozesse. Wir helfen Ihnen mit
                  personalisierten Checklisten, verständlichen Erklärungen und automatischen
                  Fristen-Erinnerungen.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/checklist-generator")}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  Jetzt starten
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Mehr erfahren
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Kostenlos & Datenschutz</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Aktuell & Zuverlässig</span>
                </div>
              </div>
            </div>

            {/* Product preview: kept self-contained so the hero never depends on a remote asset */}
            <div className="relative hidden md:block">
              <div
                role="img"
                aria-label="Beispielansicht des Behördenhelfers mit Checkliste, Dokumenten und Fristen"
                className="relative w-full aspect-square max-w-xl ml-auto overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 via-white to-slate-100 p-6 shadow-lg"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/50 blur-2xl" />
                <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-indigo-200/40 blur-2xl" />
                <div className="relative h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
                        §
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">Behördenhelfer</p>
                        <p className="text-[10px] text-slate-400">Ihre Übersicht</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>

                  <div className="mb-5 flex items-end justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-500">Guten Morgen</p>
                      <p className="text-xl font-bold text-slate-900">Ihre nächsten Schritte</p>
                    </div>
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700">
                      68% fertig
                    </span>
                  </div>

                  <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[68%] rounded-full bg-blue-600" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50/70 p-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-800">Wohnanmeldung vorbereiten</p>
                        <p className="text-[10px] text-slate-500">3 von 3 Aufgaben erledigt</p>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700">Fertig</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50/70 p-3">
                      <FileText className="h-5 w-5 shrink-0 text-blue-600" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-800">Mietvertrag verstehen</p>
                        <p className="text-[10px] text-slate-500">5 Abschnitte erklärt</p>
                      </div>
                      <span className="text-[10px] font-semibold text-blue-700">Öffnen</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-amber-100 bg-amber-50/70 p-3">
                      <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-slate-800">Krankenversicherung</p>
                        <p className="text-[10px] text-slate-500">Frist in 2 Tagen</p>
                      </div>
                      <span className="text-[10px] font-semibold text-amber-700">Dringend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Alles was Sie brauchen, um deutsche Behördenprozesse zu meistern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-200 bg-white"
                  onClick={() => navigate(feature.path)}
                >
                  <div className={`${feature.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-700 font-medium text-sm hover:gap-2 transition-all">
                    Erkunden
                    <span className="ml-2">→</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Für wen ist das?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Der Behördenhelfer ist speziell für Menschen entwickelt, die neu in Deutschland sind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4">{audience.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {audience.label}
                </h3>
                <p className="text-gray-600">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, Ihre Behördengänge zu vereinfachen?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Beginnen Sie jetzt mit personalisierten Checklisten und automatischen Fristen-Erinnerungen
          </p>
          <Button
            onClick={() => navigate("/checklist-generator")}
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all duration-200 hover:shadow-lg"
          >
            Jetzt kostenlos starten
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Behördenhelfer</h4>
              <p className="text-sm">
                Ihre Lösung für deutsche Behördenprozesse
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => navigate("/checklist-generator")}
                    className="hover:text-white transition-colors"
                  >
                    Checklisten
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/document-explainer")}
                    className="hover:text-white transition-colors"
                  >
                    Dokumente
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/deadline-reminders")}
                    className="hover:text-white transition-colors"
                  >
                    Fristen
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Impressum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Kontakt</h4>
              <p className="text-sm">
                Haben Sie Fragen oder Vorschläge?
                <br />
                <a href="mailto:info@behoerdenhelfer.de" className="text-blue-400 hover:text-blue-300">
                  Schreiben Sie uns
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 Behördenhelfer. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
