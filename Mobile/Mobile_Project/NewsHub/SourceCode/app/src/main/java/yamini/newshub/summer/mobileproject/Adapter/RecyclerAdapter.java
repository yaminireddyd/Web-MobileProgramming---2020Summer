package yamini.newshub.summer.mobileproject.Adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

import yamini.newshub.summer.mobileproject.Activity.DeepNews;
import yamini.newshub.summer.mobileproject.Model.RecycleData;
import yamini.newshub.summer.mobileproject.R;
import yamini.newshub.summer.mobileproject.Repository.Repository;

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerAdapter.ExampleViewHolder> {

    private ArrayList<RecycleData> mRecycleData;
    private Context context;

    public RecyclerAdapter(ArrayList<RecycleData> mRecycleData, Context context) {
        this.mRecycleData = mRecycleData;
        this.context = context;
    }

    @NonNull
    @Override
    public RecyclerAdapter.ExampleViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v= LayoutInflater.from(parent.getContext()).inflate(R.layout.frame001,parent,false);
        ExampleViewHolder evh=new ExampleViewHolder(v);
        return evh;
    }

    @Override
    public void onBindViewHolder(@NonNull final RecyclerAdapter.ExampleViewHolder holder, final int position) {
        final RecycleData currentdata=mRecycleData.get(position);

        holder.titletxt.setText(currentdata.getNewstitle());
        //holder.destxt.setText(currentdata.getNewsdescription());
        holder.nametxt.setText(currentdata.getNewsname());
        //holder.content.setText(currentdata.getNewsContent());
        //holder.imgg.setText(currentdata.getImgId());
        Glide.with(context)
                .load(currentdata.getNewsimage())
                .into(holder.img);

        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, DeepNews.class);
                intent.putExtra(Repository.TITLE,currentdata.getNewstitle());
                intent.putExtra(Repository.DESCRIPTION,currentdata.getNewsdescription());
                intent.putExtra(Repository.CONTENT,currentdata.getNewsContent());
                intent.putExtra(Repository.NAME,currentdata.getNewsname());
                intent.putExtra(Repository.URLTOIMAGE,currentdata.getNewsimage());
                intent.putExtra(Repository.URL,currentdata.getUrlToNews());
                intent.putExtra(Repository.PUBLISHED,currentdata.getPublishAt());

                holder.itemView.getContext().startActivity(intent);

            }
        });
    }

    @Override
    public int getItemCount() {
        return mRecycleData.size();
    }

    public class ExampleViewHolder extends RecyclerView.ViewHolder {
        private ImageView img;
        private TextView titletxt;
        //private TextView destxt;
        private TextView nametxt;
        //private TextView content;
        //private TextView imgg;
        public ExampleViewHolder(@NonNull View itemView) {
            super(itemView);
            titletxt=itemView.findViewById(R.id.title001);
            nametxt=itemView.findViewById(R.id.name001);
            //destxt=itemView.findViewById(R.id.description);
            img=itemView.findViewById(R.id.image001);
            //content=itemView.findViewById(R.id.content);
            //imgg=itemView.findViewById(R.id.imm);


            /*itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    int position = getAdapterPosition();
                    Toast.makeText(context,"Wait...",Toast.LENGTH_SHORT).show();

                    Intent intent = new Intent(context, DeepNews.class);
                    intent.putExtra(Repository.TITLE,titletxt.getText());
                    intent.putExtra(Repository.DESCRIPTION,destxt.getText());
                    intent.putExtra(Repository.CONTENT,content.getText());
                    intent.putExtra(Repository.NAME,nametxt.getText());
                    intent.putExtra(Repository.URLTOIMAGE,imgg.getText());

                    view.getContext().startActivity(intent);

                    *//*if (mListner != null) {

                        if (position != RecyclerView.NO_POSITION) {
                            mListner.onItemClick(position);
                        }
                    }*//*

                }

            });*/

        }
    }
}
