module Api
  module V1
    class PostsController < ApplicationController
      def index
        posts = Post.all
        render json: posts, status: 200
      end

      def create
        post = Post.new(post_params)
        if post.save
          render json: post, status: 200
        else
          render json: { 'message': 'invalid' }, status: 403
        end
      end

      def update; end

      def destroy; end

      private

      def post_params
        params.require(:post).permit(:description)
      end
    end
  end
end
