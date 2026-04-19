# Portfolio AWS — yucami.com

Web estática desplegada en AWS como primer proyecto del portfolio cloud.

## Servicios utilizados
- **Amazon S3**: almacenamiento y hosting de los archivos estáticos
- **Amazon CloudFront**: CDN con caché global y HTTPS
- **AWS Certificate Manager (ACM)**: certificado SSL para HTTPS
- **Amazon Route 53**: registro y gestión del dominio yucami.com

## Arquitectura
El frontend React se compila con `npm run build` generando archivos 
estáticos que se suben a un bucket S3 privado. CloudFront actúa como 
única puerta de entrada usando OAC (Origin Access Control), de forma 
que el acceso directo al bucket está bloqueado. El certificado SSL 
lo gestiona ACM y el dominio apunta a CloudFront desde Route 53.

## Por qué estos servicios
- **S3**: solución más económica para hosting de sitios estáticos, 
  sin necesidad de gestionar servidores
- **CloudFront**: sirve el contenido desde el edge location más cercano 
  al usuario reduciendo latencia, añade HTTPS y es la única forma de 
  acceder al bucket gracias a OAC
- **ACM**: certificados SSL gratuitos integrados con CloudFront
- **Route 53**: integración nativa con CloudFront y ACM que hace más fácil configuración DNS

## Decisiones técnicas destacadas
Inicialmente el bucket S3 estaba configurado con static website hosting 
activado y acceso público, lo que permitía acceder directamente al bucket 
sin pasar por CloudFront. Lo corregí desactivando el website hosting, 
haciendo el bucket privado y configurando OAC en CloudFront con bucket 
endpoint. Esto requirió añadir respuestas de error personalizadas en 
CloudFront para los códigos 403 y 404 que devuelvan index.html, necesario 
para que React gestione las rutas correctamente.

## Flujo de acceso
1. El usuario entra en yucami.com
2. Route 53 resuelve el dominio y apunta a CloudFront
3. CloudFront busca el contenido en caché en el edge location más cercano
4. Si no está en caché, lo pide al bucket S3 usando OAC
5. S3 verifica que la petición viene de CloudFront y la entrega
6. Todo el tráfico usa HTTPS gracias al certificado de ACM

## Coste mensual estimado
- **S3**: 0$ (Free Tier 12 meses, después <0,50$/mes)
- **CloudFront**: 0$ (Free Tier 12 meses, después <1$/mes)
- **ACM**: 0$ siempre
- **Route 53 zona hospedada**: 0,50$/mes
- **Dominio yucami.com**: ~1,08$/mes (13$/año)

**Total: ~1,58$/mes (Free Tier) | ~2,58$/mes (después)**

## URLs
- https://yucami.com
- https://www.yucami.com