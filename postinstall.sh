if [ ! -f "$1/ios/Podfile" ]; then
  echo "skipping Podfile, "
  exit 0
fi

