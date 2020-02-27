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

      def destroy
        post = Post.where(params[:id]).first
        if post
          post.destroy!
          render json: { 'message': 'success' }, status: 200
        else
          render json: { 'message': 'dont find' }, status: 404
        end
      end

      private

      def post_params
        params.require(:post).permit(:description)
      end
    end
  end
end
