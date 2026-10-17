# Gestor Mini Básquet

Aplicación web (PWA) para preparar alineaciones de minibásquet, leer actas de la FCBQ y llevar estadísticas.

## Privacidad
- **Este repositorio solo contiene código. No debe contener nombres, actas ni copias de seguridad.**
- Los datos (plantilla, partidos, rivales) se guardan únicamente en el dispositivo de quien usa la app
  (`localStorage` + IndexedDB). La app no envía nada a ningún servidor y no usa claves de API.
- El archivo `.gitignore` evita subir copias (`montmelo-cb-*.json`) y actas (`*.pdf`) por error.
- Las copias de seguridad pueden cifrarse con contraseña (AES-GCM) desde «Histórico».

## Instalar en el móvil
1. Abre la URL de la app en Chrome (Android) o Safari (iPhone).
2. Menú ⋮ → «Instalar aplicación» / «Añadir a pantalla de inicio».
3. Funciona sin conexión. Para pasar los datos a otro dispositivo, usa «Hacer copia» y «Restaurar copia».

## Generar un APK (opcional)
Con la app publicada en una URL https, entra en https://www.pwabuilder.com, introduce la URL y descarga el paquete de Android.
Los datos del APK son independientes de los del navegador: pásalos con una copia de seguridad.
