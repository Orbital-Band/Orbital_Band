import React, { useState } from 'react';
import logoImg from '../assets/Orbital_Logo.png';

/* ─── Iconos del footer reutilizados ─────────────────────────────────── */
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.271 0-4.192 1.549-4.192 4.615v3.385z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
  </svg>
);

const SoundCloudIcon = () => (
  <svg fill="#ffffff" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="-271 345.8 256 111.2">
    <g>
      <path d="M-238.4,398.1c-0.8,0-1.4,0.6-1.5,1.5l-2.3,28l2.3,27.1c0.1,0.8,0.7,1.5,1.5,1.5c0.8,0,1.4-0.6,1.5-1.5l2.6-27.1l-2.6-28C-237,398.7-237.7,398.1-238.4,398.1z" />
      <path d="M-228.2,399.9c-0.9,0-1.7,0.7-1.7,1.7l-2.1,26l2.1,27.3c0.1,1,0.8,1.7,1.7,1.7c0.9,0,1.6-0.7,1.7-1.7l2.4-27.3l-2.4-26C-226.6,400.6-227.3,399.9-228.2,399.9z" />
      <path d="M-258.6,403.5c-0.5,0-1,0.4-1.1,1l-2.5,23l2.5,22.5c0.1,0.6,0.5,1,1.1,1c0.5,0,1-0.4,1.1-1l2.9-22.5l-2.9-23C-257.7,404-258.1,403.5-258.6,403.5z" />
      <path d="M-268.1,412.3c-0.5,0-1,0.4-1,1l-1.9,14.3l1.9,14c0.1,0.6,0.5,1,1,1s0.9-0.4,1-1l2.2-14l-2.2-14.2C-267.2,412.8-267.6,412.3-268.1,412.3z" />
      <path d="M-207.5,373.5c-1.2,0-2.1,0.9-2.2,2.1l-1.9,52l1.9,27.2c0.1,1.2,1,2.1,2.2,2.1s2.1-0.9,2.2-2.1l2.1-27.2l-2.1-52C-205.4,374.4-206.4,373.5-207.5,373.5z" />
      <path d="M-248.6,399c-0.7,0-1.2,0.5-1.3,1.3l-2.4,27.3l2.4,26.3c0.1,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.5,1.3-1.2l2.7-26.3l-2.7-27.3C-247.4,399.6-247.9,399-248.6,399z" />
      <path d="M-217.9,383.4c-1,0-1.9,0.8-1.9,1.9l-2,42.3l2,27.3c0.1,1.1,0.9,1.9,1.9,1.9s1.9-0.8,1.9-1.9l2.3-27.3l-2.3-42.3C-216,384.2-216.9,383.4-217.9,383.4z" />
      <path d="M-154.4,359.3c-1.8,0-3.2,1.4-3.2,3.2l-1.2,65l1.2,26.1c0,1.8,1.5,3.2,3.2,3.2c1.8,0,3.2-1.5,3.2-3.2l1.4-26.1l-1.4-65C-151.1,360.8-152.6,359.3-154.4,359.3z" />
      <path d="M-197.1,368.9c-1.3,0-2.3,1-2.4,2.4l-1.8,56.3l1.8,26.9c0,1.3,1.1,2.3,2.4,2.3s2.3-1,2.4-2.4l2-26.9l-2-56.3C-194.7,370-195.8,368.9-197.1,368.9z" />
      <path d="M-46.5,394c-4.3,0-8.4,0.9-12.2,2.4C-61.2,368-85,345.8-114,345.8c-7.1,0-14,1.4-20.1,3.8c-2.4,0.9-3,1.9-3,3.7v99.9c0,1.9,1.5,3.5,3.4,3.7c0.1,0,86.7,0,87.3,0c17.4,0,31.5-14.1,31.5-31.5C-15,408.1-29.1,394-46.5,394z" />
      <path d="M-143.6,353.2c-1.9,0-3.4,1.6-3.5,3.5l-1.4,70.9l1.4,25.7c0,1.9,1.6,3.4,3.5,3.4c1.9,0,3.4-1.6,3.5-3.5l1.5-25.8l-1.5-70.9C-140.2,354.8-141.7,353.2-143.6,353.2z" />
      <path d="M-186.5,366.8c-1.4,0-2.5,1.1-2.6,2.6l-1.6,58.2l1.6,26.7c0,1.4,1.2,2.6,2.6,2.6s2.5-1.1,2.6-2.6l1.8-26.7l-1.8-58.2C-184,367.9-185.1,366.8-186.5,366.8z" />
      <path d="M-175.9,368.1c-1.5,0-2.8,1.2-2.8,2.8l-1.5,56.7l1.5,26.5c0,1.6,1.3,2.8,2.8,2.8s2.8-1.2,2.8-2.8l1.7-26.5l-1.7-56.7C-173.1,369.3-174.3,368.1-175.9,368.1z" />
      <path d="M-165.2,369.9c-1.7,0-3,1.3-3,3l-1.4,54.7l1.4,26.3c0,1.7,1.4,3,3,3c1.7,0,3-1.3,3-3l1.5-26.3l-1.5-54.7C-162.2,371.3-163.5,369.9-165.2,369.9z" />
    </g>
  </svg>
);

/* ─── Iconos de contacto directo ────────────────────────────────────── */
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.42 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

/* ─── Constantes de contacto ─────────────────────────────────────────── */
const PHONE_NUMBER = '525542454471';
const EMAIL_ADDRESS = 'orbital.band@gmail.com';

/* ─── Página de Contacto ─────────────────────────────────────────────── */
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  /* Validaciones */
  const errors = {
    name: !form.name.trim() ? 'El nombre es obligatorio.' : '',
    contact:
      !form.email.trim() && !form.phone.trim()
        ? 'Debes proporcionar al menos un correo o un teléfono.'
        : '',
    email:
      form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ? 'El formato del correo no es válido.'
        : '',
    phone:
      form.phone.trim() && !/^[\d\s+\-()]{10,}$/.test(form.phone)
        ? 'El formato del teléfono no es válido.'
        : '',
    message: !form.message.trim() ? 'El mensaje es obligatorio.' : '',
    terms: !form.terms ? 'Debes aceptar los términos y condiciones.' : '',
  };

  const isValid =
    !errors.name &&
    !errors.contact &&
    !errors.email &&
    !errors.phone &&
    !errors.message &&
    !errors.terms;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true, terms: true });
    if (!isValid) return;
    setSubmitted(true);
  };

  const fieldClass = (field) => {
    if (!touched[field]) return 'input w-full';
    return errors[field] ? 'input w-full input-error' : 'input w-full input-success';
  };

  return (
    <div className="min-h-screen pb-10" style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #2a1a0a 60%, #1a1a1a 100%)' }}>
      <div className="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div></div>
      </div>
      {/* Hero */}
      <div
        className="hero min-h-[38vh] flex flex-col items-center justify-center text-center px-4 pt-8 pb-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(45deg, #1a1a1a 0%, #d1782579 100%)', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at 20% 30%, rgba(41, 41, 41, 0.08), transparent 60%),' +
              'radial-gradient(ellipse at 80% 70%, rgba(214, 214, 214, 0.06) 0%, transparent 55%)',
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <img src={logoImg} alt="Orbital Band Logo" className="mx-auto mb-3 w-50 md:w-85 h-auto logo-shadow" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5" style={{ textShadow: '0 4px 24px rgba(255,137,33,0.25)' }}>
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
            ¿Quieres contratar la banda, colaborar o simplemente saludarnos? Estamos a un mensaje de distancia. Cuéntanos en qué podemos ayudarte.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-2xl mx-auto px-4 mt-10 flex flex-col gap-10">

        {/* Card 1: Formulario */}
        <div className="aura aura-silver">

          <div className="card bg-base-100/90 backdrop-blur shadow-2xl">
            <div className="card-body gap-5">
              <h2 className="card-title text-2xl font-bold">Envíanos un mensaje</h2>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8">
                  <div className="text-5xl">🚀</div>
                  <p className="text-xl font-bold text-success text-center">¡Mensaje enviado con éxito!</p>
                  <p className="text-center text-base-content/70">Nos pondremos en contacto contigo pronto.</p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => {
                      setForm({ name: '', email: '', phone: '', message: '', terms: false });
                      setTouched({});
                      setSubmitted(false);
                    }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                  {/* Nombre */}
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Nombre <span className="text-error">*</span></legend>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Tu nombre completo"
                      className={fieldClass('name')}
                      value={form.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                    />
                    {touched.name && errors.name && (
                      <p className="fieldset-label text-error">{errors.name}</p>
                    )}
                    {touched.name && !errors.name && (
                      <p className="fieldset-label text-success">Perfecto</p>
                    )}
                  </fieldset>

                  {/* Correo y Teléfono */}
                  <div>
                    {touched.email && touched.phone && errors.contact && (
                      <p className="text-error text-sm mb-2">&#9888; {errors.contact}</p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">Correo electrónico</legend>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          placeholder="tu@correo.com"
                          className={
                            touched.email
                              ? errors.email || (errors.contact && !form.email.trim())
                                ? 'input w-full input-error'
                                : 'input w-full input-success'
                              : 'input w-full'
                          }
                          value={form.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur('email')}
                        />
                        {touched.email && errors.email && (
                          <p className="fieldset-label text-error">{errors.email}</p>
                        )}
                      </fieldset>

                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">Teléfono</legend>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          placeholder="+52 55 0000 0000"
                          className={
                            touched.phone
                              ? errors.phone || (errors.contact && !form.phone.trim())
                                ? 'input w-full input-error'
                                : 'input w-full input-success'
                              : 'input w-full'
                          }
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur('phone')}
                        />
                        {touched.phone && errors.phone && (
                          <p className="fieldset-label text-error">{errors.phone}</p>
                        )}
                      </fieldset>
                    </div>
                    <p className="text-xs text-base-content/50 mt-1">
                      Proporciona al menos uno: correo o teléfono.
                    </p>
                  </div>

                  {/* Mensaje */}
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Mensaje <span className="text-error">*</span></legend>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Cuéntanos en qué podemos ayudarte…"
                      rows={4}
                      className={
                        'textarea w-full ' +
                        (touched.message
                          ? errors.message ? 'textarea-error' : 'textarea-success'
                          : '')
                      }
                      value={form.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                    />
                    {touched.message && errors.message && (
                      <p className="fieldset-label text-error">{errors.message}</p>
                    )}
                    {touched.message && !errors.message && (
                      <p className="fieldset-label text-success">Perfecto</p>
                    )}
                  </fieldset>

                  {/* Términos y condiciones */}
                  <fieldset className="fieldset">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        id="contact-terms"
                        type="checkbox"
                        name="terms"
                        className={
                          'checkbox mt-0.5 ' +
                          (touched.terms
                            ? errors.terms ? 'checkbox-error' : 'checkbox-success'
                            : '')
                        }
                        checked={form.terms}
                        onChange={handleChange}
                        onBlur={() => handleBlur('terms')}
                      />
                      <span className="text-sm text-base-content/80">
                        Acepto los{' '}
                        <a href="#" className="link link-primary" onClick={(e) => e.preventDefault()}>
                          Términos y Condiciones
                        </a>{' '}
                        y el uso de mis datos para responder a mi consulta.{' '}
                        <span className="text-error">*</span>
                      </span>
                    </label>
                    {touched.terms && errors.terms && (
                      <p className="fieldset-label text-error mt-1">{errors.terms}</p>
                    )}
                  </fieldset>

                  {/* Botón enviar */}
                  <div className="card-actions justify-end mt-2">
                    <div className="aura aura-silver">
                      <button
                        id="contact-submit"
                        type="submit"
                        className="btn btn-primary px-8"
                      >
                        Enviar mensaje
                      </button>
                    </div>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: Links de contacto y redes */}
        <div className="aura aura-silver">
          <div className="card bg-base-100/90 backdrop-blur shadow-2xl">
            <div className="card-body gap-6">
              <h2 className="card-title text-2xl font-bold">Encuéntranos en</h2>

              <div className="flex flex-wrap justify-center gap-6">

                {/* Contacto directo */}
                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-call-btn"
                    href={`tel:+${PHONE_NUMBER}`}
                    className="btn btn-square bg-[#1a1a1a] border-[#FF8921] hover:bg-[#FF8921] text-white shadow-lg transition-colors duration-200"
                    title="Llamar"
                  >
                    <PhoneIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Llamar</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-whatsapp-btn"
                    href={`https://wa.me/${PHONE_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-square bg-[#25D366] border-[#128C7E] hover:bg-[#1ebe59] text-white shadow-lg transition-colors duration-200"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">WhatsApp</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-email-btn"
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="btn btn-square bg-[#1a1a1a] border-[#FF8921] hover:bg-[#FF8921] text-white shadow-lg transition-colors duration-200"
                    title="Correo electrónico"
                  >
                    <EmailIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Correo</span>
                </div>

                {/* Redes sociales (mismos que el footer) */}
                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-instagram-btn"
                    href="https://www.instagram.com/orbital.band"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-square bg-[#E1306C] border-[#B02654] hover:bg-[#C13584] text-white shadow-lg"
                  >
                    <InstagramIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Instagram</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-tiktok-btn"
                    href="https://www.tiktok.com/@orbital.bandd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-square bg-black border-[#333333] hover:bg-neutral-800 text-white shadow-lg"
                  >
                    <TikTokIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">TikTok</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-facebook-btn"
                    href="https://www.facebook.com/orbitalbandd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-square bg-[#1877F2] border-[#0D59B7] hover:bg-[#166FE5] text-white shadow-lg"
                  >
                    <FacebookIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Facebook</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-spotify-btn"
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-square bg-[#1DB954] border-[#169C46] hover:bg-[#1ED760] text-white shadow-lg"
                  >
                    <SpotifyIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Spotify</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <a
                    id="contact-soundcloud-btn"
                    href="https://soundcloud.com/laguna-legacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-square bg-[#FF3300] border-[#CC2900] hover:bg-[#e62e00] text-white shadow-lg"
                  >
                    <SoundCloudIcon />
                  </a>
                  <span className="text-[10px] uppercase font-bold tracking-tighter opacity-70">SoundCloud</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
