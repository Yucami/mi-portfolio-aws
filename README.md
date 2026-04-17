# Portfolio AWS

Sitio web estático desplegado en AWS como primer proyecto de mi portfolio cloud.

## Servicios utilizados
- **Amazon S3**: almacenamiento y hosting del sitio estático
- **Amazon CloudFront**: distribución de contenido 
- **Amazon Route 53**: gestión de dominio (pendiente)

## Arquitectura
El frontend React se compila con npm run build y se sube al bucket S3 
configurado como sitio web estático con acceso público.

## Por qué S3 para hosting
Es la solución más sencilla y económica para un sitio estático sin neecsidad de gestionar servidores, además escala automáticamente.

## Por qué CloudFront
CloudFront pone el contenido en servidores distribuidos por todo el mundo 
(edge locations), así los usuarios reciben el portfolio más rápido 
independientemente de dónde estén. Además añade HTTPS automáticamente.

## Limitación conocida
El bucket S3 es accesible directamente además de por CloudFront. 
Esto ocurre porque uso el website endpoint de S3, que requiere acceso público. 
En producción real se usaría el bucket endpoint con OAC para que solo CloudFront pueda acceder al bucket.

## URL
http://mi-portfolio-aws.s3-website-us-east-1.amazonaws.com
https://d1lr3mcj80288c.cloudfront.net