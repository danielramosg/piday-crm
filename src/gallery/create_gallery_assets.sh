rm ./gallery_assets.ts
echo "export default [" > ./gallery_assets.ts
for i in ./cleaned/*; do echo "new URL('$i',import.meta.url).href," >> ./gallery_assets.ts; done
echo "];" >> ./gallery_assets.ts
