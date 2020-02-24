module Api
  module V1
    class PostsController < ApplicationController
      def index
        posts = Post.all
        render json: posts, status: 200
      end

      def create; end

      def update; end

      def destroy; end
    end
  end
end
