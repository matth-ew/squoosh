set -e

docker build -t squoosh-rust-nightly --build-arg RUST_IMG=rustlang/rust:nightly - < ../rust.Dockerfile
docker run -it --rm -v $PWD:/src squoosh-rust-nightly "$@"
